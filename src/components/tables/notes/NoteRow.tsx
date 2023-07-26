import React from 'react';

const NoteRow = () => {
  return (
    <div className="note-item grid h-[80px] grid-cols-tableNote gap-[20px] rounded-md bg-green-500 p-[10px]">
      <div className="note-name flex items-center gap-[10px]">
        <img src="./images/task-icons/cart.svg" alt="" className="w-[20px]" />
        <p>Shopping list</p>
      </div>
      <div className="note-created flex items-center">
        <p>April 20, 2021</p>
      </div>
      <div className="note-category flex items-center">
        <p>Random thought</p>
      </div>
      <div className="note-content flex	items-center overflow-hidden">
        <p className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap">
          The evolution
        </p>
      </div>
      <div className="note-date flex items-center">
        <p>3/5/2021, 5/5/2021</p>
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
          src="./images/icons/trash.svg"
          alt="trash"
          className="w-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NoteRow;
