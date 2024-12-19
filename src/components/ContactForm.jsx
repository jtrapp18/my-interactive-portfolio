import React, {useState} from "react";
import styled from "styled-components";
import { StyledForm, StyledButton } from "../MiscStyling";

const MessageLabel = styled.label`
  padding-bottom: 200px;
`

const StyledSection = styled.section`
    position: relative;
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
