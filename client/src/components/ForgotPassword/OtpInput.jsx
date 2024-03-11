import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields() {
  const [otp, setotp] = useState();
  const [helperText, sethelperText] = useState("OTP");
  const handleChange = (e) => {
    setotp(e.target.value);
  };

  React.useEffect(() => {
    fetch("http://localhost:8000/api/forgot/otpverify", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ otp }),
    })
      .then(async (response) => {
        const data = await response.json();
        sethelperText(data.message); // Assuming the response has a 'message' property
      })
      .catch((error) => console.log("error in fetching : ", error));
  }, [otp]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "290px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          // helperText={helperText}
          id="demo-helper-text-aligned"
          label={helperText}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
