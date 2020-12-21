import React, {useState} from "react";

function CreateArea(props) {
  const [noteArea, setNoteArea] = useState({
    title: "",
    content: ""
  }); 

  function handleChange(event) {
    const {name, value} = event.target;

    setNoteArea(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })

  }

  function submitNote(event) {
    props.onAdd(noteArea); 
    setNoteArea({
      title: "",
      content: ""
    }); 
    event.preventDefault(); 
  }

  
  return (
    <div>
      <form>
        <input name="title" onChange = {handleChange} value = {noteArea.title} placeholder="Title" />
        <textarea name="content" onChange = {handleChange} value = {noteArea.content} placeholder="Take a note..." rows="3" />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
