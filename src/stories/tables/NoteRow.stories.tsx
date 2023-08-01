import { notesData } from 'data';
import { useState } from 'react';

import NoteRow, { RowColor } from 'components/tables/notes/NoteRow';
import { StandardSizes } from 'types/view';

export default {
  title: 'NoteRow',
  component: NoteRow,
  argTypes: {
    heightRow: ['sm', 'md', 'xl'],
    rowColor: ['bg-salmon', 'bg-mint', 'bg-sandybrown'],
    removeNote: { action: 'removed' },
    editNote: { action: 'edited' },
  },
};

type NoteViewProps = {
  heightRow: StandardSizes;
  rowColor: RowColor;
  removeNote: () => null;
  editNote: () => null;
};

export const NoteRowView = {
  render: (args: NoteViewProps) => {
    const [isArchive, setIsArchive] = useState(false);

    return (
      <NoteRow
        {...args}
        isArchive={isArchive}
        toggleArchiveNote={() => setIsArchive(!isArchive)}
        note={notesData[0]}
      />
    );
  },
  args: {
    heightRow: 'md',
    rowColor: 'bg-salmon',
  } as NoteViewProps,
};
