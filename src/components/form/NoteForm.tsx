import { useFormik } from 'formik';
import * as yup from 'yup';

import { FormNoteProps } from 'sections/Notes';
import { Note } from 'types/noteTypes';

import DropDownInput from './DropDownInput';
import FormInput from './FormInput';

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
      className="note-form grid grid-cols-tripleFr items-baseline	gap-x-[20px] gap-y-[40px] p-[20px]"
      onSubmit={formik.handleSubmit}>
      <FormInput
        id="note-form-name"
        placeholder="Note name"
        heightInput="sm"
        type="text"
        touched={formik.touched.name}
        errors={formik.errors.name}
        {...formik.getFieldProps('name')}
      />
      <FormInput
        id="note-form-content"
        placeholder="Note content"
        heightInput="sm"
        type="text"
        touched={formik.touched.content}
        errors={formik.errors.content}
        {...formik.getFieldProps('content')}
      />
      <DropDownInput
        id="note-form-category"
        {...formik.getFieldProps('category')}
        paddingSize="md"
      />
      <button type="submit" className="col-start-2 h-[40px] bg-slate-500">
        Submit form
      </button>
    </form>
  );
};

export default NoteForm;
