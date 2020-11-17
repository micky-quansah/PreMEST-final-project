import React, { useState } from 'react';
import './login_form.css';
import { Form, FormInput, FormGroup, Container, Row, Col, FormRadio, Button } from "shards-react";

function LogForm() {

  const [ username, setUsername ] = useState({username: ''});
  const [ password, setPassword ] = useState({password: ''});
  const [ isStudent, setIsStudent ] = useState(false);
  const [ userInfo, setUserInfo ] = useState({
    username: '',
    password: '',
    school: false,
  });

  const handleIsSchool = () => { setIsStudent(!isStudent); }

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername({username: e.target.value})}

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword({password: e.target.value})}
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setUserInfo({
      username: username,
      password: password,
      school: isStudent,
    })
  }

  return(
    <Container>
      <Row>
        <Col sm="12" lg="6">
          <Form className='login_form'>
            <FormGroup>
              <label htmlFor="#username">Username</label>
              <FormInput id="#username" onChange={handleUsername} placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Password</label>
              <FormInput type="password" id="#password" onChange={handlePassword} placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <FormRadio name="school" checked={isStudent} onChange={handleIsSchool}>Student</FormRadio>
              {isStudent && <FormGroup>
                <label htmlFor="id">School Id</label>
                <FormInput type="text" placeholder="Enter unique ID"/>
                </FormGroup>}
            </FormGroup>
            <FormGroup>
              <Button theme="success" onSubmit={ handleSubmit }>LOG IN</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LogForm;