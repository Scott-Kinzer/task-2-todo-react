import { noteCategory } from '../../../data';
import { NoteStatsResult } from '../../../helpers/filterNotes';

type Props = {
  note: NoteStatsResult;
};

const SummaryRow = ({ note }: Props) => {
  return (
    <div className="summary-note-item mt-[20px] grid h-[80px] grid-cols-tripleFr gap-[10px] rounded-md bg-green-500 p-[10px]">
      <div className="summary-note-item-category flex items-center gap-[10px]">
        <img
          src={noteCategory[note.categoryType].imagePath}
          alt=""
          className="w-[20px]"
        />
        <p>{noteCategory[note.categoryType].name}</p>
      </div>
      <div className="note-active flex items-center">{note.active || 0}</div>
      <div className="note-archive flex items-center">{note.archive || 0}</div>
    </div>
  );
};

export default SummaryRow;
