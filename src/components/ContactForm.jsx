import React, {useState} from "react";
import styled from "styled-components";
import { StyledForm, StyledButton } from "../MiscStyling";

const MessageLabel = styled.label`
  padding-bottom: 200px;
`

const StyledSection = styled.section`
    position: relative;
    width: 600px;
    max-width: 90%;
    justify-items: center;
`

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
    <StyledSection>
      <h1>Send me a message!</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>
            Name: 
            <input type="text" name="fullName" placeholder="Name" value={formData.fullName} onChange={handleChange}/>
        </label>
        <br />
        <label>
            Email: 
            <input type="text" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}/>
        </label>
        <br />
        <label>
            Topic: 
            <input type="text" name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange}/>
        </label>
        <br />
        <MessageLabel>
            Message: 
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        </MessageLabel>
        <br />
        <StyledButton type="submit">Send Message</StyledButton>
        <br />
      </StyledForm>
    </StyledSection>
  );
}

export default ContactForm;
