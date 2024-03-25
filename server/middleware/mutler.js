import multer from "multer";
import path from "path";
import pool from "../database/db.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("hi");
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const userid = req.user.userid;
    cb(null, file.fieldname + "-" + userid + path.extname(file.originalname));
  },
});
export const upload = multer({ storage });

export const handleFileUpload = async (req, res, next) => {
  const userId = req.user.userid;
  const imagePath = req.file.path;

  try {
    // Update the user's record in the database with the image path
    const updateQuery = `
      UPDATE users
      SET pfp_path = $1
      WHERE userid = $2
    `;
    await pool.query(updateQuery, [imagePath, userId]);

    // Continue to the next middleware
    next();
  } catch (error) {
    console.error("Error updating user's image path:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
