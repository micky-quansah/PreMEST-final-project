import React, { useState } from 'react';
import { Form, FormInput, FormGroup, Container, Row, Col, Button, Modal, ModalBody, ModalHeader } from "shards-react";
import axios from 'axios';

function Register(props) {
  
  const [ schoolname, setSchoolName ] = useState();
  const [ email, setEmail ] = useState();
  const [ regNumber, setRegNumber] = useState();
  const [ location, setLocation ] = useState();
  const [ phone, setPhone ] = useState();
  const [ password, setPassword ] = useState();
  const [ userInfo, setUserInfo ] = useState();
  const [open, setOpen ] = useState(false);

  /* const handleIsSchool = () => { setIsSchool(!isSchool); } */
  const handleRegistrationNumber = (e) => {
    setRegNumber(e.target.value);
  }

  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
  }

  const handleUsername = (e) => {
    setSchoolName(e.target.value);
    console.log(schoolname);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)}

  const toggle = () => {
    setOpen(!open);
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserInfo({
      name: schoolname,
      password: password,
      email: email,
      location: location,
      registrationNumber: regNumber,
      phoneNumber: phone,
    });
    /* 
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:8000/accounts/signUp',
      data: userInfo
    }); */

    axios.post(`http://localhost:8000/accounts/signUp`, { userInfo })
      .then(res => {
        if (res.statusText === "OK") {
          // props.handler();
          toggle();
        }
      }).catch((err) => {
        alert('something went wrong! '+ err)
      });
  }
  return(
    <Container>
      <Row>
        <Col sm="12" lg="6">
          <Modal open={open} toggle={toggle}>
            <ModalHeader>Signed In Successfully</ModalHeader>
            <ModalBody>👋 Hello there! Welcome</ModalBody>
          </Modal>
          <Form className='login_form'>
            <FormGroup>
              <label htmlFor="#schoolname">School Name</label>
              <FormInput type='text' id="#schoolname" onChange={handleUsername} placeholder="School Name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#email">Email</label>
              <FormInput type='email' id="#email" onChange={handleEmail} placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#phonenumber">Phone Number</label>
              <FormInput type='number' id="#phonenumber" onChange={handlePhoneNumber} placeholder="Phone Number" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#location">Location</label>
              <FormInput type="text" id="#location" onChange={handleLocation} placeholder="Location" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#registrationNumber">Registration ID</label>
              <FormInput type="text" id="#registrationNumber" onChange={handleRegistrationNumber} placeholder="Registration Number" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Password</label>
              <FormInput type="password" id="#password" onChange={handlePassword} placeholder="password" />
            </FormGroup>
            {/* <FormGroup>
              <FormRadio name="school" checked={isSchool} onChange={handleIsSchool}>School</FormRadio>
            </FormGroup> */}
            <FormGroup>
              <Button theme="success" onClick={ handleSubmit }>SIGN UP</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;