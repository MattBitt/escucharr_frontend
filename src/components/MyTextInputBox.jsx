function MyTextInputBox(props) {
  return (
    <>
      <p>
        <input
          type="text"
          className="form-control"
          id={props.id}
          placeholder={props.name}
          name={props.name}
          defaultValue={props.value}
        />
      </p>
    </>
  )
}

export default MyTextInputBox
