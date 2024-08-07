import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [expandedFlag, setExpandedFlag] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setExpandedFlag(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {expandedFlag && <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />}
        
        <textarea
          name="content"
          placeholder="Take a note..."
          onClick={expand}
          rows={expandedFlag? 3:1}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={expandedFlag}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
