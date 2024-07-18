import pool from "../database/db.js";
import { uploadOnCloudinary } from "../utilities/cloudinary.js";
export const updateProfile = async (req, res) => {
  const { name, email, dob, gender, phone, address, aboutus } = req.body;
  const userId = req.user.userid;
  const imagePath = req.file?.path;
  // console.log(imagePath);
  let uploadPfp = null;

  const updateQuery = `
  UPDATE users
  SET name = $1, email = $2, dob = $3, gender = $4, phone = $5, address = $6, aboutus = $7,
  pfp_path=$8
  WHERE userid = $9
  `;

  try {
    if (imagePath) {
      uploadPfp = await uploadOnCloudinary(imagePath, userId);
      if (!uploadPfp.url) console.error("failed to upload on cluodinary");
    } else console.log("image not uploaded");
    // console.log(uploadPfp.url);
    await pool.query(updateQuery, [
      name,
      email,
      dob,
      gender,
      phone,
      address,
      aboutus,
      uploadPfp.url,
      userId,
    ]);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
