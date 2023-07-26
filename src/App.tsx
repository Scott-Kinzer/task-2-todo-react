import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { store } from './redux-toolkit/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
