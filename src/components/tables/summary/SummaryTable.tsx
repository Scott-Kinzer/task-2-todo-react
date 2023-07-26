import { NoteStatsResult } from 'helpers/filterNotes';

import SummaryRow from './SummaryRow';

type Props = {
  filteredNotes: NoteStatsResult[];
};

const SummaryTable = ({ filteredNotes }: Props) => {
  return (
    <div className="mt-[20px]">
      {filteredNotes.map((note, i: number) => {
        return <SummaryRow key={i} note={note} />;
      })}
    </div>
  );
};

export default SummaryTable;
