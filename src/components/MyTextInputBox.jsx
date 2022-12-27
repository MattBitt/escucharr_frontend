function MyTextInputBox(props) {
  return (
    <div>
        <div className="form-floating mt-3 mb-3">
            <input type="text" className="form-control" id="{props.id}" placeholder="{props.name}" name="{props.name}" defaultValue={props.value} />
            <label htmlFor="pwd">{props.name}</label>
        </div>
</div>
  )
}

export default MyTextInputBox
