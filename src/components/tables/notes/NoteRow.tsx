import { noteCategory } from '../../../data';
import { extractDates } from '../../../helpers/extractDate';
import { formatDate } from '../../../helpers/formatDate';
import { Note } from '../../../types/noteTypes';

type Props = {
  note: Note;
  removeNote: (id: string) => void;
};

const NoteRow = ({ note, removeNote }: Props) => {
  return (
    <div className="note-item mt-[20px] grid h-[80px] grid-cols-tableNote gap-[20px] rounded-md bg-green-500 p-[10px]">
      <div className="note-name flex items-center gap-[10px]">
        <img src="./images/task-icons/cart.svg" alt="" className="w-[20px]" />
        <p>{note.name}</p>
      </div>
      <div className="note-created flex items-center">
        <p>{formatDate(note.created)}</p>
      </div>
      <div className="note-category flex items-center">
        <p>{noteCategory[note.category].name}</p>
      </div>
      <div className="note-content flex	items-center overflow-hidden">
        <p className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {note.content}
        </p>
      </div>
      <div className="note-date flex items-center">
        <p>{extractDates(note.content)}</p>
      </div>
      <div className="ml-auto flex gap-[20px]">
        <img
          src="./images/icons/edit.svg"
          alt="edit"
          className="w-[20px] cursor-pointer"
        />
        <img
          src="./images/icons/archive.svg"
          alt="archive"
          className="w-[20px] cursor-pointer"
        />
        <img
          onClick={() => removeNote(note.id)}
          src="./images/icons/trash.svg"
          alt="trash"
          className="w-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NoteRow;
