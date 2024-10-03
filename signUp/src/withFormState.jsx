
import React, { useState } from "react";
 
// Higher-Order Component (HOC) to handle form state
const withFormState = (WrappedComponent) => {
  return (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [volunteerRole, setVolunteerRole] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
 
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !phone || !volunteerRole || !termsAccepted) {
        setErrorMessage("Please fill all fields and accept terms.");
        return;
      }
      setErrorMessage(""); // Clear any previous error
      alert("your form has been Submitted")
 
      // Log the values or handle form data submission here
      console.log("Form Submitted:", { name, email, phone, volunteerRole });
      console.log("Form Submitted:", { name, email, phone, volunteerRole });
      console.log("Form Submitted:", { name, email, phone, volunteerRole });
      
 
      // Reset fields after submission
      setName('');
      setEmail('');
      setPhone('');
      setVolunteerRole('');
      setTermsAccepted(false);
    };
    
 
    return (
      <WrappedComponent
        {...props}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        volunteerRole={volunteerRole}
        setVolunteerRole={setVolunteerRole}
        termsAccepted={termsAccepted}
        setTermsAccepted={setTermsAccepted}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    );
  };
};
 
export default withFormState;