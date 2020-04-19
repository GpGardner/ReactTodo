import React, { Component } from "react";
import './NoteForm.css'

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // when the use input changes, set the 
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, //value of the text input
        })
    }

    writeNote(){
        //call a method that sets the noteContent for a note to the value of the input
        this.props.addNote(this.state.newNoteContent);
        
        //set newNoteContent to an empty string
        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(
            <div class="formWrapper">
                <input className="noteInput" placeholder="Write a new note..." value={this.state.newNoteContent} onChange={this.handleUserInput} />
                <button className="noteButton" onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;