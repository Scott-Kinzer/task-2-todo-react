import { useDispatch } from 'react-redux';

import {
  removeNote,
  toggleArchiveNote,
} from 'redux-toolkit/features/notesSlice';
import { Note } from 'types/noteTypes';

import NoteRow from './NoteRow';

type Props = {
  notes: Note[];
  isArchive: boolean;
  chooseNote: (note: Note | null) => void;
  chosenNote: Note | null;
};

const NotesTable = ({ notes, isArchive, chosenNote, chooseNote }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="notes mt-[30px]">
      {notes.map(note => {
        return (
          <NoteRow
            isArchive={isArchive}
            toggleArchiveNote={(id: string) => {
              dispatch(toggleArchiveNote(id));

              if (chosenNote?.id === id) {
                chooseNote(null);
              }
            }}
            removeNote={(id: string) => {
              dispatch(removeNote(id));

              if (chosenNote && chosenNote.id === id) {
                chooseNote(null);
              }
            }}
            editNote={chooseNote}
            note={note}
            key={note.id}
          />
        );
      })}
    </div>
  );
};

export default NotesTable;
