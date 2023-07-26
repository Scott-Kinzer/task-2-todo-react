import React from 'react';

type Props = {
  toggleNote: () => void;
};

const HeaderNotes = ({ toggleNote }: Props) => {
  return (
    <header className="header-notes grid grid-cols-headerNote gap-4 rounded-md bg-gray-500 p-4 text-white">
      <div className="flex items-center">
        <p>Name</p>
      </div>
      <div className="flex items-center">
        <p>Created</p>
      </div>
      <div className="flex items-center">
        <p>Category</p>
      </div>
      <div className="flex items-center">
        <p>Content</p>
      </div>
      <div className="flex items-center">
        <p>Dates</p>
      </div>
      <div className="icons-header ml-auto grid grid-cols-doubleFr gap-4">
        <div onClick={toggleNote} className="archive-icon cursor-pointer">
          <img
            src="/images/icons/archive.svg"
            alt="archive"
            className="w-[20px]"
          />
        </div>
        <div className="trash-icon">
          <img src="/images/icons/trash.svg" alt="trash" className="w-[20px]" />
        </div>
      </div>
    </header>
  );
};

export default HeaderNotes;
