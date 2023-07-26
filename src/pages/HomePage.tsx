import NoteForm from '../components/form/NoteForm';
import Notes from '../sections/Notes';
import Summary from '../sections/Summary';

const HomePage = () => {
  return (
    <div>
      <Notes />
      <NoteForm />
      <Summary />
    </div>
  );
};

export default HomePage;
