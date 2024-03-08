import pool from "../database/db.js";

export const addTransaction = (req, res) => {
  const userid = req.user.userid;
  // console.log(userid);
  const { type, time, amount, category, note } = req.body;
  const query =
    "INSERT INTO transactions (time, amount, categoryid, note, userid) VALUES ($1, $2, $3, $4, $5)";
  const value = [time, amount, category, note, userid];
  pool.query(query, value, (error, result) => {
    if (error) {
      console.error("Error executing query", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully");
      res.status(200).json({ message: "Data inserted successfully" });
    }
  });
};
// export const addTransaction = (req, res) => {
//   const { iAmount, iCategory, iNote, iDate, iTime } = req.body;
//   pool.query(
//     `INSERT INTO income (userid,amount,category,note,date,time) VALUES ($1,$2,$3,$4,$5,$6)`,
//     [index, iAmount, iCategory, iNote, iDate, iTime]
//   );
//   const { eAmount, eCategory, eNote, eDate, eTime } = req.body;
//   pool.query(
//     `INSERT INTO expense (userid,amount,category,note,date,time) VALUES ($1,$2,$3,$4,$5,$6)`,
//     [index, eAmount, eCategory, eNote, eDate, eTime]
//   );
// }
