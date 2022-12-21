import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyTextInputBox from './MyTextInputBox';

export default function TestForm() {
  return (
    <div><h1>Track Form</h1>

    <MyTextInputBox id="id-input" name="ID" label="ID" />
    <MyTextInputBox id="arist-input" name="Artist" label="Artist" />
    <MyTextInputBox id="track-num-input" name="Track Number" label="Track Number" />
    <MyTextInputBox id="title-input" name="Title" label="Title" />
    <MyTextInputBox id="album-input" name="Album" label="Album" />
    <MyTextInputBox id="path-input" name="Path" label="Path" />
    
    

  
</div>


  )
}
