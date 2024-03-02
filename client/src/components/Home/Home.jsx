import React, { useState, useRef, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";

import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import "./home.css";
import Table from "./Table";

import { useRecoilState } from "recoil";
import { transactionAtom } from "../../recoil/atom/transactionAtom";
import { json } from "react-router-dom";

const Amount = ({ handleOnChange }) => {
  const [transaction, setTransaction] = useRecoilState(transactionAtom);
  return (
    <FormControl sx={{ m: 2, width: "100%" }}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        label="Amount"
        value={transaction.amount}
        name="amount"
        onChange={handleOnChange}
        type="number"
        required
      />
    </FormControl>
  );
};

const Category = ({ handleOnChange }) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [options, setOptions] = useState([
  //   { label: "One", value: "one" },
  //   { label: "Two", value: "two" },
  //   { label: "Three", value: "three" },
  // ]);
  // const [value, setValue] = useState(null);

  // const handleCreate = async (inputValue) => {
  //   setIsLoading(true);

  //   try {
  //     // Make a request to your backend API to save the new option
  //     const response = await fetch("http://localhost:8000/api/addcategory", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ label: inputValue }),
  //     });

  //     if (response.ok) {
  //       // If the request is successful, update the options
  //       const newOption = {
  //         label: inputValue,
  //         value: inputValue.toLowerCase().replace(/\W/g, ""),
  //       };
  //       setOptions((prev) => [...prev, newOption]);
  //       setValue(newOption);
  //     } else {
  //       // Handle error if the request fails
  //       console.error("Failed to save the new option");
  //     }
  //   } catch (error) {
  //     console.error("Error while making the request:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // return (
  //     <CreatableSelect
  //       id="outlined-adornment-category"
  //       isClearable
  //       isDisabled={isLoading}
  //       isLoading={isLoading}
  //       onChange={(newValue) => setValue(newValue)}
  //       onCreateOption={handleCreate}
  //       options={options}
  //       value={value}
  //       placeholder=""
  //     />
  const [transaction, setTransaction] = useRecoilState(transactionAtom);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={transaction.category}
        name="category"
        label="Category"
        onChange={handleOnChange}
        required
      >
        <MenuItem value={1}>Food</MenuItem>
        <MenuItem value={2}>Travel</MenuItem>
        <MenuItem value={3}>Education</MenuItem>
      </Select>
    </FormControl>
  );
};

const DateTime = ({ handleOnChange }) => {
  const [time, settime] = useState(dayjs());
  setInterval(() => {
    settime(dayjs());
  }, 60000);
  const [transaction, setTransaction] = useRecoilState(transactionAtom);
  // console.log(time.toISOString());
  const onTimeChange = (event) => {
    setTransaction((prev) => ({
      ...prev,
      time: time.toISOString(),
    }));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          label="Time"
          name="time"
          value={time}
          onChange={onTimeChange}
          defaultValue={dayjs()}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

const IEbox = ({ ttype }) => {
  const [transaction, setTransaction] = useRecoilState(transactionAtom);

  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = () => {
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:8000/api/addtransaction", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTransaction((prev) => ({
          type: ttype,
          time: dayjs().toISOString(),
          amount: "",
          category: "",
          note: "",
        }));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={ttype + "-container iecontainer"}>
      <h1>{ttype}</h1>
      <DateTime />
      <Amount handleOnChange={handleOnChange} />
      <Category handleOnChange={handleOnChange} />
      <TextField
        id="outlined-basic"
        label="Note"
        variant="outlined"
        name="note"
        sx={{ m: 2, width: "100%" }}
        value={transaction.note}
        // onChange={(event) => {
        //   setnote(event.target.value);
        // }}
        onChange={handleOnChange}
        required
      />
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "10%",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
        color={ttype === "income" ? "success" : "error"}
        // onClick={}
        onClick={handleOnSubmit}
      >
        Add {ttype}
      </Button>
    </div>
  );
};

const Home = () => {
  const toggleRef = useRef();
  const [type, settype] = useState("expense");
  const [transaction, setTransaction] = useRecoilState(transactionAtom);

  useEffect(() => {
    setTransaction((prev) => ({
      type: type,
      time: dayjs().toISOString(),
      amount: "",
      category: "",
      note: "",
    }));
  }, [type]);

  const toggleOnClick = (text) => {
    if (text !== type) {
      toggleRef.current.classList.toggle("toggle-position");
      settype(text);
      return;
    }
  };

  const notType = type === "income" ? "expense" : "income";
  const welcomeText =
    notType === "income"
      ? "Cheers! Just got paid or received some extra cash?"
      : "Uh-oh! Where did the money go? Essential expense or a guilty pleasure?";

  return (
    <>
      <div className="margin-left">
        <div className="trans-main-container">
          <div className="trans-container">
            <IEbox ttype={"expense"} />
            <IEbox ttype={"income"} />
            <div className="toggle-container" ref={toggleRef}>
              <h1>Hello!</h1>
              <p>{welcomeText}</p>
              <button onClick={() => toggleOnClick(notType)}>
                add {notType}
              </button>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </>
  );
};

export default Home;
