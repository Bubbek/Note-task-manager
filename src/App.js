import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import List from './components/List'
import {getNotes} from './utils/noteHelpers'

/* 
Netflix
- movies
- tv shows
- actor

C: Create a note
R: Read (get) a note
U: Update a note
D: Delete a note
*/

function App() {
  return (
    <Container fluid="md">
      <Jumbotron>
        <h1>Notes</h1>
      </Jumbotron>
      <Row>
        <Col x={12} md={4}>
          <Button block variant="dark">
            New Note
          </Button>
          <br />
          <List />
        </Col>
        <Col xs={12} md={8}>
          <div>
            <label htmlFor="basic-url">Title</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend></InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>

            <label htmlFor="basic-url">Note</label>
            <InputGroup>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </div>
          <br />
          <Button variant="primary">Save</Button> <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App
