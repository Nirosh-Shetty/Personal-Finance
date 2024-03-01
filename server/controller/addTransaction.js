export const addTransaction = (req, res) => {
  const { iAmount, iCategory, iNote, iDate, iTime } = req.body;
  pool.query(
    `INSERT INTO income (userid,amount,category,note,date,time) VALUES ($1,$2,$3,$4,$5,$6)`,
    [index, iAmount, iCategory, iNote, iDate, iTime]
  );
  const { eAmount, eCategory, eNote, eDate, eTime } = req.body;
  pool.query(
    `INSERT INTO expense (userid,amount,category,note,date,time) VALUES ($1,$2,$3,$4,$5,$6)`,
    [index, eAmount, eCategory, eNote, eDate, eTime]
  );
};
