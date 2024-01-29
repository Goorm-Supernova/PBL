import React from "react";
import { Note } from "../types/note";
import { Dispatch } from "@reduxjs/toolkit";
import { NotesIconBox } from "../styles/styles";
import {
  deleteNote,
  restoreNote,
  setArchiveNotes,
  setEditNote,
  setTrashNotes,
  unArchiveNote,
} from "../store/notesList/notesListSlice";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { toggleCreateNoteModal } from "../store/modal/modalSlice";

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {
  const clickHandler = () => {
    dispatch(setEditNote(note));
    dispatch(toggleCreateNoteModal(true));
  };

  if (type === "archive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unArchiveNote(note))}
          data-info="Unarchive"
        >
          <RiInboxUnarchiveFill style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          date-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else if (type === "trash") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          date-info="Restore"
        >
          <FaTrashRestore style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else {
    return (
      <>
        <NotesIconBox onClick={clickHandler} date-info="Edit">
          <FaEdit style={{ fontSize: "1rem" }} onClick={clickHandler} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-info="Archive"
        >
          <FaTrashRestore style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          date-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  }
};

export default getRelevantBtns;
