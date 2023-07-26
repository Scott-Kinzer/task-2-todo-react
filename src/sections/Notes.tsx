import React from 'react';

import HeaderNotes from '../components/headers/NotesHeader';
import NotesTable from '../components/tables/notes/NotesTable';

const Notes = () => {
  return (
    <>
      <HeaderNotes />
      <NotesTable />
    </>
  );
};

export default Notes;
