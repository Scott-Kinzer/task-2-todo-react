import React from 'react';

const NoteForm = () => {
  return (
    <form className="note-form grid grid-cols-tripleFr gap-[20px] p-[20px]">
      <input
        id="note-form-name"
        className="h-[40px] rounded-md p-[5px]"
        placeholder="Note name"
        type="text"
      />
      <input
        id="note-form-content"
        className="h-[40px] rounded-md p-[5px]"
        placeholder="Note content"
        type="text"
      />
      <select
        name="form-category"
        id="note-form-category"
        className="h-[40px] rounded-md p-[5px]">
        <option value="task">Task</option>
        <option value="thought">Random Thought</option>
        <option value="idea">Idea</option>
        <option value="quote">Quote</option>
      </select>
      <button type="submit" className="col-start-2 h-[40px] bg-slate-500">
        Submit form
      </button>
    </form>
  );
};

export default NoteForm;
