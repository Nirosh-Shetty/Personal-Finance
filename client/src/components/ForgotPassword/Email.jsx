import React, { useEffect, useState } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

import { password } from "../../recoil/atom/password";
import { useRecoilState } from "recoil";

export default function InputSubscription() {
  const [pass, setPass] = useRecoilState(password);

  const [email, setemail] = useState();
  const onEmailChange = (e) => {
    setemail(e.target.value);
  };
  useEffect(() => {
    setPass((prev) => {
      return { ...prev, email: email };
    });
  }, [email]);

  const onEmailSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/forgot/emailcheck", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) console.log("responmse not ok");
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error in fecthing :", error);
      });
  };
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <form
      // onSubmit={handleSubmit}
      onSubmit={onEmailSubmit}
      id="demo"
    >
      <FormControl sx={{ width: "290px", marginBottom: "15px" }}>
        {/* <FormLabel
          sx={(theme) => ({
            "--FormLabel-color": theme.vars.palette.primary.plainColor,
          })}
        >
          MUI Newsletter
        </FormLabel> */}
        <Input
          sx={{
            "--Input-decoratorChildHeight": "45px",
            width: "100%",
            fontSize: "1.3rem",
          }}
          placeholder="Enter you email"
          type="email"
          required
          // value={data.email}
          value={email}
          // onChange={(event) =>
          //   setData({ email: event.target.value, status: "initial" })
          // }
          onChange={onEmailChange}
          error={data.status === "failure"}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === "loading"}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              // onSubmit={onEmailSubmit}
            >
              Send OTP
            </Button>
          }
        />

        {data.status === "failure" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === "sent" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            OTP send
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
