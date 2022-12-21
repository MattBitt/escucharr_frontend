import React from 'react'

function MyTextInputBox(props) {
  return (
    <div>
        <div className="form-floating mt-3 mb-3">
            <input type="text" className="form-control" id="{props.id}" placeholder="{props.label}" name="{props.name}" />
            <label htmlFor="pwd">{props.label}</label>
        </div>
</div>
  )
}

export default MyTextInputBox
