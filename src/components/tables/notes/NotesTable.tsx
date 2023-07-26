import { useDispatch } from 'react-redux';

import { removeNote } from '../../../redux-toolkit/features/notesSlice';
import { Note } from '../../../types/noteTypes';

import NoteRow from './NoteRow';

type Props = {
  notes: Note[];
};

const NotesTable = ({ notes }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="notes mt-[30px]">
      {notes.map(note => {
        return (
          <NoteRow
            removeNote={(id: string) => dispatch(removeNote(id))}
            note={note}
            key={note.id}
          />
        );
      })}
    </div>
  );
};

export default NotesTable;
