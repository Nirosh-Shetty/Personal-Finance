import pool from "../database/db.js";

export const updateProfile = async (req, res) => {
  const { name, email, dob, gender, phone, address, aboutus } = req.body;
  const userId = req.user.userid;
  const updateQuery = `
  UPDATE users
  SET name = $1, email = $2, dob = $3, gender = $4, phone = $5, address = $6, aboutus = $7
  WHERE userid = $8
  `;
  try {
    console.log("bbbbbbbbbbbb");
    await pool.query(updateQuery, [
      name,
      email,
      dob,
      gender,
      phone,
      address,
      aboutus,
      userId,
    ]);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
