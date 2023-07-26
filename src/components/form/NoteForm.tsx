import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as yup from 'yup';

import { FormNoteProps } from 'sections/Notes';
import { Note } from 'types/noteTypes';

type Props = {
  onSubmit: (values: FormNoteProps) => void;
  note: Note | null;
};

const NoteForm = ({ onSubmit, note }: Props) => {
  const formik = useFormik({
    initialValues: {
      name: note?.name || '',
      content: note?.content || '',
      category: note?.category || 'task',
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().required('Note name is required.'),
      content: yup.string().required('Note content is required.'),
    }),
    onSubmit: values => {
      formik.resetForm();
      onSubmit(values);
    },
  });

  return (
    <form
      className="note-form grid grid-cols-tripleFr gap-x-[20px] gap-y-[40px] p-[20px]"
      onSubmit={formik.handleSubmit}>
      <div className="relative block">
        <input
          id="note-form-name"
          className=" h-[40px] w-[100%] rounded-md p-[5px]"
          placeholder="Note name"
          type="text"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="absolute bottom-[-25px] text-red-600">
            {formik.errors.name}
          </div>
        ) : null}
      </div>
      <div className="relative block">
        <input
          id="note-form-content"
          className="h-[40px] w-[100%] rounded-md p-[5px]"
          placeholder="Note content"
          type="text"
          {...formik.getFieldProps('content')}
        />
        {formik.touched.content && formik.errors.content ? (
          <div className="absolute bottom-[-25px] text-red-600">
            {formik.errors.content}
          </div>
        ) : null}
      </div>

      <select
        id="note-form-category"
        className="h-[40px] rounded-md p-[5px]"
        {...formik.getFieldProps('category')}>
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
