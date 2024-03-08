import pool from "../database/db.js";

export const getData = async (req, res) => {
  const userId = req.user.userid;

  // Query to fetch transaction data with corresponding categories
  const transactionQuery = `
    SELECT
      t.amount,
      t.time,
      c.category_name,
      c.type,
      t.note
    FROM transactions t
    JOIN categories c ON t.categoryid = c.categoryid
    WHERE t.userid = $1
  `;

  const expenseCategoriesQuery = `
  SELECT DISTINCT *
  FROM categories
  WHERE userid = $1 AND type = 'expense'
`;

  const incomeCategoriesQuery = `
      SELECT *
      FROM categories
      WHERE userid = $1 AND type = 'income'
    `;
  try {
    const result = await pool.query(transactionQuery, [userId]);
    const transactionHistory = result.rows;

    // Fetch distinct categories for income

    const incomeCategoriesResult = await pool.query(incomeCategoriesQuery, [
      userId,
    ]);
    const incomeCategories = incomeCategoriesResult.rows.map((row) => ({
      categoryId: row.categoryid,
      category: row.category_name,
    }));

    const expenseCategoriesResult = await pool.query(expenseCategoriesQuery, [
      userId,
    ]);
    const expenseCategories = expenseCategoriesResult.rows.map((row) => ({
      categoryId: row.categoryid,
      category: row.category_name,
    }));

    res.json({ transactionHistory, incomeCategories, expenseCategories });
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    res.status(500).json({
      error: "Internal Server Error (error in getting transaction data)",
    });
  }
};
