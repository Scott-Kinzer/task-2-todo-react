import React from 'react';

import { Note } from 'types/noteTypes';
type Props = {
  color?: string;
  textColor?: string;
  isShowForm: boolean;
  setIsShowForm: (value: React.SetStateAction<boolean>) => void;
  setChosenNoteForEdition: (value: React.SetStateAction<Note | null>) => void;
};

const NoteButton = ({
  color = 'bg-indigo',
  textColor = 'text-white',
  isShowForm,
  setIsShowForm,
  setChosenNoteForEdition,
}: Props) => {
  return (
    <button
      className={`ml-auto mt-5 block h-10 w-28 rounded-lg ${color} ${textColor}`}
      onClick={() => {
        setIsShowForm(!isShowForm);
        setChosenNoteForEdition(null);
      }}>
      {isShowForm ? 'Hide Form' : 'Create note'}
    </button>
  );
};

export default NoteButton;
