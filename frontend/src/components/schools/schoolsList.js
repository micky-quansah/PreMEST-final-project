import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Container, Row, Col,  } from "shards-react";
import axios from 'axios';

function SchoolList(props) {

  const query = props.searchQuery;

  const [schoolList, setSchoolList] = useState([
    {name: "Some School"},
    {name: "Big school oh"},
    {name: "Not really a school"},
    {name: "School name"}
  ]);

/* useEffect(()=>{
  let schools = axios({
    method: 'GET',
    url: 'http://localhost:8000/schools'
  });
  setSchoolList(schools);
},[]) */

const handleClick = (e) => {
  axios({
    method: 'GET',
    url: 'http://localhost:8000/school',
    data: e.target.value.item
  })
}

  return (
    <Container style={{height: "50vh"}} sm='12' lg='6'>
      <Row>
        <Col>
          <ListGroup>
            {query===''?
            schoolList.map((item) => {
              return <ListGroupItem onClick={handleClick} >{item.name}</ListGroupItem>
              }):
              schoolList.filter(person => person.name === query)
                .map(filteredSchool => (<ListGroupItem>{filteredSchool.name}</ListGroupItem>))
            }
            
            
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default SchoolList;