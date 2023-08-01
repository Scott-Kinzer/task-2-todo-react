import { useState } from 'react';

import NoteButton from 'components/buttons/NoteButton';

export default {
  title: 'NoteButton',
  component: NoteButton,
  argTypes: {
    setChosenNoteForEdition: { action: 'chosenNote' },
    textColor: 'text-white',
  },
};

type ButtonProps = {
  setChosenNoteForEdition: () => null;
  textColor: string;
};

export const Button = {
  render: (args: ButtonProps) => {
    const [isShowForm, setIsShowForm] = useState(false);

    return (
      <NoteButton
        color="bg-indigo"
        isShowForm={isShowForm}
        setIsShowForm={() => setIsShowForm(!isShowForm)}
        {...args}
      />
    );
  },
};

export const DefaultButtonPeach = {
  render: (args: ButtonProps) => {
    const [isShowForm, setIsShowForm] = useState(false);

    return (
      <NoteButton
        color="bg-peach"
        isShowForm={isShowForm}
        setIsShowForm={() => setIsShowForm(!isShowForm)}
        {...args}
      />
    );
  },
};
