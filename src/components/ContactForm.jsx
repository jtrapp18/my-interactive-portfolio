import React, {useState} from "react";
import styled from "styled-components";
import { StyledForm, StyledButton } from "../MiscStyling";

function ContactForm() {

  const emptyObj = {
      fullName: "",
      emailAddress: "",
      topic: "",
      message: "",
    }
    const [formData, setFormData] = useState(emptyObj);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(prevData=> {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function changePerson(event) {
        setAttendee(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
    
      // Send the form data to the backend
      fetch("https://my-interactive-portfolio-be-production.up.railway.app/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // send form data as JSON
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message); // Display success message
          setFormData(emptyObj);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error sending your message.");
        });

    }    

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Send me a message!</h1>
      <label htmlFor="fullName">Name:</label>
      <input type="text" name="fullName" placeholder="Name" value={formData.fullName} onChange={handleChange}/>
      <br />
      <label htmlFor="emailAddress">Email:</label>
      <input type="text" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}/>
      <br />
      <label htmlFor="topic">Topic:</label>
      <input type="text" name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange}/>
      <br />
      <label htmlFor="message">Message:</label>
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
      <br />
      <StyledButton type="submit">SUBMIT</StyledButton>
    </StyledForm>
  );
}

export default ContactForm;
