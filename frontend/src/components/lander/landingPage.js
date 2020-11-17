import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardHeader, CardImg, CardBody, CardTitle, CardFooter } from "shards-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import './landingPage.css';
import Register from '../form/registerUser';
import School from '../schools/school';
import image from './pexels-jess-bailey-designs-743986.jpg';
import CreateCourse from '../createResource/createCourse';

function Home(props) {

  const loggedIn = props.isLoggedIn;
  let { path, url } = useRouteMatch();

  return(
    
    <Container fluid>
      <Row>

        <Router>
          <Switch>
          <Route path="/home">
              
              <Col className='background' lg="12">
                <h1 className='brandName'>Virtual School</h1>
                <p className='motor'>Get your School to the world!</p>
                {
                  loggedIn? 
                  <Link to="/school"><Button className='regButtonStyle' outline theme="success">Attend Class</Button></Link>:
                  <Link to="/register"><Button className='regButtonStyle' outline theme="danger">Register School</Button></Link>
                }
              </Col>

              {loggedIn&&
              <Col lg="6" sm="12" style={{height: "40%", margin: "4rem"}}>
              <Card style={{margin: "0rem auto", width: "80%"}}>
                <Link to="/create_course">
                <CardHeader><Button style={{margin: "0rem auto"}} outline pill theme="secondary">
                Create Course
              </Button>
              </CardHeader>
                </Link>
                <CardImg style={{height: "50vh"}} src={image} />
              </Card>
              </Col>
            }

            </Route>

            <Route path="/register">
              <Register handler={props.handler}/>
            </Route>

            <Route path="/school">
              <School/>
            </Route>

            <Route path="/create_course">
              <CreateCourse/>
            </Route>

            <Route><Redirect to="/home" /></Route>

          </Switch>
        </Router>

      </Row>
    </Container>
  );
}

export default Home;
