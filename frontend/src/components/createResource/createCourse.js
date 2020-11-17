import React, { useState } from "react";
import { Container, Row, Col, FormTextarea, FormInput, Form, FormGroup } from "shards-react";
import axios from 'axios';

function CreateCourse() {
  const [files, setFiles] = useState({selectedFile: null});
  const [value, setNote] = useState();
  const [title, setTitle] = useState();

  const courseTitleHandler = event => {
    setTitle(event.target.value);
  }

const noteHandler = event => {
  setNote(event.target.value);
}

const onChangeHandler = event => {
    setFiles({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    console.log(event.target.files[0]);
}

const onClickHandler = () => {
  const data = {
    files,
    title,
    value
  }
/*   const data = new FormData() 
  data.append('file', files.selectedFile);
  data.append('title', title);
  data.append('note', value); */

  console.log(data);

  axios({
    method: 'POST',
    url: 'http://localhost:8000/upload/',
    data: data
  })
  .then(res => { // then print response status
    console.log(res.statusText)
  })
}

  return(
    <Container>
      <Row>
        <Col>
          <p style={{margin: "4rem 0 0 0", fontSize: "2rem"}} >Create A new Course</p>
          <Form style={{margin: "4rem 0 0 0"}}>
            <FormGroup>
            <label htmlFor="course">Course Title</label>
            <FormInput style={{width: "60%"}} id="course" placeholder="Enter Title" onChange={courseTitleHandler} />
            </FormGroup>
            <FormGroup>
            <label htmlFor="files">Please select Course Video and Note</label>
            <FormInput style={{width: "60%"}} id="files" type="file" onChange={onChangeHandler} />;
            </FormGroup>
            <FormGroup>
            <label htmlFor="upload">Enter Explanatory note for the video</label>
            <div>
            <p className="mb-2">
            {(value && `🗣 ${value}`) || "🤔 Waiting for you to Write something..."}
            </p>
            <FormTextarea style={{width: "80%"}} id="upload" onChange={noteHandler} />
            </div>
            </FormGroup>
            <FormGroup>
            <button style={{width: "40%", margin: "2rem 0"}} type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateCourse;