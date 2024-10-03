
// SignUpPage component (wrapped with the HOC)
import React,{useState} from 'react';
import './App.css';
import withFormState from './withFormState';
function SignUpPage({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  volunteerRole,
  setVolunteerRole,
  termsAccepted,
  setTermsAccepted,
  handleSubmit,
  errorMessage,
}) {
  const [combinedInput, setCombinedInput] = useState('');
 
  // Handle the change for the combined input
  const handleCombinedInputChange = (e) => {
    const value = e.target.value;
    setCombinedInput(value);
 
    const parts = value.split(',').map((part) => part.trim()); // Split on commas and trim whitespace
 
    if (parts.length === 3) {
      setName(parts[0]); // First part is name
      setEmail(parts[1]); // Second part is email
      setPhone(parts[2]); // Third part is phone
    }
  };
  
 
  return (
    <div className="sign-up-page">
      <h1>Volunteer Sign-up</h1>
      <p>Join us for a day of giving back to the community!</p>
      <form onSubmit={handleSubmit}>
        {/* Conditionally render the error message */}
        {errorMessage && <p className="error">{errorMessage}</p>}
 
        {/* Single Input Field for Name, Email, and Phone */}
        <div className="form-group">
          <label>Enter Name, Email, Phone (separated by commas):</label>
          <input
            type="text"
            value={combinedInput}
            onChange={handleCombinedInputChange}
            placeholder="xyz , xyz@example.com , 1234567890 "
            
            required
          />
        </div>
 
        {/* Volunteer Role Dropdown */}
        <div className="form-group">
          <label>Volunteer Role:</label>
          <select
            value={volunteerRole}
            onChange={(e) => setVolunteerRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            <option value="event-coordinator">Event Coordinator</option>
            <option value="volunteer-leader">Volunteer Leader</option>
            <option value="general-volunteer">General Volunteer</option>
          </select>
        </div>
 
        {/* Terms and Conditions Checkbox */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            I accept the terms and conditions.
          </label>
        </div>
 
        {/* Submit Button */}
        <button type="submit">Sign up</button>

      </form>
    </div>
  );
}

// Export the SignUpPage wrapped with the HOC
export default withFormState(SignUpPage);
 
