import { noteCategory } from 'data';

import { extractDates } from 'helpers/extractDate';
import { formatDate } from 'helpers/formatDate';
import { Note } from 'types/noteTypes';
import { StandardSizes } from 'types/view';

type Props = {
  rowColor?: RowColor;
  isArchive: boolean;
  heightRow?: StandardSizes;
  note: Note;
  removeNote: (id: string) => void;
  toggleArchiveNote: (id: string) => void;
  editNote: (note: Note) => void;
};

export type RowColor = 'bg-salmon' | 'bg-mint' | 'bg-sandybrown';

const rowHeightConfig: Record<StandardSizes, string> = {
  sm: 'h-[50px]',
  md: 'h-[80px]',
  xl: 'h-[100px]',
};

const NoteRow = ({
  heightRow = 'sm',
  rowColor = 'bg-salmon',
  note,
  isArchive,
  removeNote,
  toggleArchiveNote,
  editNote,
}: Props) => {
  const rowHeight = rowHeightConfig[heightRow];
  return (
    <div
      className={`note-item mt-[20px] grid ${rowHeight} grid-cols-tableNote gap-[20px] rounded-md ${rowColor} p-[10px]`}>
      <div className="note-name flex items-center gap-[10px]">
        <img
          src={noteCategory[note.category].imagePath}
          alt=""
          className="w-[20px]"
        />
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
        {!isArchive && (
          <img
            onClick={() => editNote(note)}
            src="./images/icons/edit.svg"
            alt="edit"
            className="w-[20px] cursor-pointer"
          />
        )}
        <img
          onClick={() => toggleArchiveNote(note.id)}
          src="./images/icons/archive.svg"
          alt="archive"
          className="w-[20px] cursor-pointer"
        />
        {!isArchive && (
          <img
            onClick={() => removeNote(note.id)}
            src="./images/icons/trash.svg"
            alt="trash"
            className="w-[20px] cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default NoteRow;
