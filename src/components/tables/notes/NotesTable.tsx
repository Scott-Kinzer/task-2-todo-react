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
  chooseNote: (note: Note) => void;
};

const NotesTable = ({ notes, isArchive, chooseNote }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="notes mt-[30px]">
      {notes.map(note => {
        return (
          <NoteRow
            isArchive={isArchive}
            toggleArchiveNote={(id: string) => dispatch(toggleArchiveNote(id))}
            removeNote={(id: string) => dispatch(removeNote(id))}
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
