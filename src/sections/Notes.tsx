import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import NoteForm from 'components/form/NoteForm';
import HeaderNotes from 'components/headers/NotesHeader';
import NotesTable from 'components/tables/notes/NotesTable';
import { addNote, editNote } from 'redux-toolkit/features/notesSlice';
import { RootState } from 'redux-toolkit/store';
import { NOTE_CATEGORIES, Note } from 'types/noteTypes';

export type FormNoteProps = {
  name: string;
  content: string;
  category: NOTE_CATEGORIES;
};

const Notes = () => {
  const [isArchive, setIsArchive] = useState<boolean>(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [chosenNoteForEdition, setChosenNoteForEdition] = useState<null | Note>(
    null
  );

  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notesSlice.notes);

  const filteredNotes = useMemo(() => {
    const innerNotesCopy = notes.filter(item => {
      if (isArchive) {
        return item.isArchive;
      } else {
        return !item.isArchive;
      }
    });

    return innerNotesCopy;
  }, [isArchive, notes]);

  const onSubmit = (values: FormNoteProps) => {
    if (chosenNoteForEdition) {
      const newNote = {
        ...chosenNoteForEdition,
        ...values,
        created: new Date(),
      };

      dispatch(editNote(newNote));
    } else {
      const newNote = {
        name: values.name,
        content: values.content,
        category: values.category,
        created: new Date(),
        isArchive: false,
        id: uuidv4(),
      };

      dispatch(addNote(newNote));
    }
    setChosenNoteForEdition(null);
  };

  return (
    <>
      <HeaderNotes
        isArchive={isArchive}
        toggleNote={() => setIsArchive(!isArchive)}
      />
      <NotesTable
        chooseNote={note => {
          setChosenNoteForEdition(note);
          setIsShowForm(true);
        }}
        chosenNote={chosenNoteForEdition}
        isArchive={isArchive}
        notes={filteredNotes}
      />
      <button
        className="ml-auto mt-5 block h-10 w-28 rounded-lg bg-slate-300 text-black"
        onClick={() => {
          setIsShowForm(!isShowForm);
          setChosenNoteForEdition(null);
        }}>
        {isShowForm ? 'Hide Form' : 'Create note'}
      </button>

      {isShowForm && (
        <NoteForm onSubmit={onSubmit} note={chosenNoteForEdition} />
      )}
    </>
  );
};

export default Notes;
