import React from 'react'
import {
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Card,
} from 'react-bootstrap'
import Text from './Text'
import Bar from './Bar'

function TypingInput() {
  return (
    <div className='btata '>
      <Row>
        <Col>
          <Bar />
        </Col>
      </Row>
      <Row>
        <Col className='text-center py-3'>
          <Card>
            <Card.Header>
              <Text />
            </Card.Header>
            <Card.Body>
              <InputGroup className='mb-3'>
                <FormControl placeholder='' />
                <InputGroup.Append>
                  <Button variant='secondary'>Redo</Button>
                </InputGroup.Append>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TypingInput
