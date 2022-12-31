import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

function FloatingLabelTextBox(props) {
  return (
    <>
      <FloatingLabel controlId="floatingInput" label={props.name}>
        <Form.Control
          type="text"
          placeholder={props.name}
          defaultValue={props.value}
        />
      </FloatingLabel>
    </>
  )
}

export default FloatingLabelTextBox
