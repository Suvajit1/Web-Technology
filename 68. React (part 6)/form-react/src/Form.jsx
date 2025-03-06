import { useState } from "react";

export default function Form() {
  //   let [fullName, setFullName] = useState("");
  //   let [username, setUsername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  //   let hadleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let hadleUsernameChange = (event) => {
  //     // console.log(event.target.value);
  //     setUsername(event.target.value);
  //   };

  //   let handleInputChange = (event) => {
  //     let fieldName = event.target.name;
  //     // console.log(fieldName);
  //     let newValue = event.target.value;
  //     // console.log(newValue);

  //     setFormData((currData) => {
  //       //   currData[fieldName] = newValue;
  //       //   return { ...currData };
  //       return {
  //         ...currData,
  //         [fieldName]: newValue,
  //       };
  //     });
  //   };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name : </label>
        <input
          type="text"
          placeholder="Enter your full name"
          id="fullname"
          value={formData.fullName}
          onChange={handleInputChange}
          name="fullName"
        />

        <br />
        <br />

        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />

        <br />
        <br />

        <label htmlFor="pass">Password : </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="pass"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />
        <br />
        <button>Submit!</button>
      </form>
    </>
  );
}
