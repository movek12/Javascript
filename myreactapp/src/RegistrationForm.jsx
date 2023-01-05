import React, { useState } from "react";
export default function RegistrationForm() {
  const [studentDetails, setStudentDetails] = useState({
    firstname:'',
    lastname:'',
    address:'',
    emailadd:'',
    mobilenumber:''
  });
  // const {firstname,lastname,address,emailadd,mobilenumber} = studentDetails;

  const handleFirstName = ({target: {value}})=> {
    setStudentDetails({...setStudentDetails,firstname:value});
  }

  const handleLastName = ({target: {value}}) => {
    setStudentDetails({...setStudentDetails,lastname:value});
  }
  const handleAddress = ({target: {value}}) => {
    setStudentDetails({...setStudentDetails,address:value});
  }
  const handleEmail = ({target: {value}}) => {
    setStudentDetails({...setStudentDetails,emailadd:value});
  }
  const handleMobileNumber = ({target: {value}}) => {
    setStudentDetails({...setStudentDetails,mobilenumber:value});
  }
  return (
    <div>
      <form action="Registration Form">
        <h2 id="header1">Megaboys Hostel</h2>
        <hr />
        <div className="div1">
          <label htmlFor="Label">Firstname: </label>
          <input
            type="text"
            id="input-lastName"
            onChange = {handleFirstName}
            placeholder="Firstname"
            value={studentDetails.firstname}
          />
          <br />
          <br />

          <label htmlFor="Label">Lastname: </label>
          <input
            type="text"
            id="input-lastName"
            onChange = {handleLastName}
            placeholder="Lastname"
            value={studentDetails.lastname}
          />
          <br />
          <br />

          <label htmlFor="Address">Address: </label>
          <input
            type="text"
            id="inputField"
            placeholder="Address"
            onChange={handleAddress}
            value={studentDetails.address}
          />
          <br />
          <br />

          <label htmlFor="Address">Mobile Number: </label>
          <input
            type="number"
            id="inputField"
            placeholder="Mobilenumber"
            value={studentDetails.mobilenumber}
            onChange={handleMobileNumber}
          />
          <br />
          <br />

          <label htmlFor="Address">E-mail Address: </label>
          <input
            type="text"
            id="inputField"
            placeholder="E-mail Address"
            onChange={handleEmail}
            value={studentDetails.emailadd}
          />
          <br />
          <br />
        </div>
        <div className="div2">
        <h3 id="header-gender">Gender</h3>
        <input type="radio" id="radio" />
        <label htmlFor="">Male</label>
        <br />
        <input type="radio" id="radio" />
        <label htmlFor="">Female</label>
        <br />
        <input type="radio" id="radio" />
        <label htmlFor="">Others</label>
        <br />
        <br />
        <label htmlFor="DOB">Date of Birth</label>
        <br />
        <br />
        <input type="date" />
        <br />
        <br />
        <label htmlFor="Photo">Please upload your Photo</label>
        <br />
        <br />
        <input type="file" />
        <br />
        <br />
        <label htmlFor="Photo">Please upload your Photo</label>
        <br />
        <br />
        <input type="file" />
        <br />
        <br />
        </div>
        <button 
        type="submit"
        id="submitButton"
        // onClick={handleSubmit}
        >
          Submit the Form</button>
      </form>
    </div>
  );
}
