import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import SummaryHeader from 'components/headers/SummaryHeader';
import SummaryTable from 'components/tables/summary/SummaryTable';
import { filterNotes } from 'helpers/filterNotes';
import { RootState } from 'redux-toolkit/store';

const Summary = () => {
  const notes = useSelector((state: RootState) => state.notesSlice.notes);

  const filteredNotes = useMemo(() => {
    return filterNotes(notes);
  }, [notes]);

  return (
    <div className="mt-[40px]">
      <SummaryHeader />
      <SummaryTable filteredNotes={filteredNotes} />
    </div>
  );
};

export default Summary;
