import "./style.css";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    password: "",
    email: ""
  });

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.password && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

 

  return (
    <div className="form-container">
     <div className="form-box">
     <form className="register-form" onSubmit={handleSubmit}>
<div> 
      <h1 className="text-center fw-bolder mt-3">Registration</h1>
</div>
     {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName} {" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
       
       {!valid && (
         <div className="fname">
                     <label htmlFor="sname">Name :</label>

           <input
           class="form-field shadow"
           type="text"
           placeholder="First Name"
           name="firstName"
           id="sname"
           value={values.firstName}
           onChange={handleInputChange}
         />
         </div>
       )}

       {submitted && !values.firstName && (
         <span id="first-name-error">Please enter a first name</span>
       )}

       {!valid && (
        <div className="lname">
         <label htmlFor="ln">Password :</label>
          <input
           class="form-field"
           type="password"
           id="ln"
           placeholder="password"
           name="password"
           value={values.password}
           onChange={handleInputChange}
         />
        </div>
       )}

       {submitted && !values.password && (
         <span id="last-name-error">Please enter a valid Password</span>
       )}

       {!valid && (
         <div>
           <label htmlFor="em">Email Id :</label>
           <input
           class="form-field"
           type="email"
           id="em"
           placeholder="Email"
           name="email"
           value={values.email}
           onChange={handleInputChange}
         />
         </div>
       )}

       {submitted && !values.email && (
         <span id="email-error">Please enter an email address</span>
       )}
       {!valid && (
         <button class="form-field" type="submit">
           Register
         </button>
       )}
     </form>
     </div>
    </div>
   
  );
   
}
 export default App;