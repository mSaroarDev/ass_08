import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expense from './pages/Expense';
import Homepage from './pages/Homepage';
import Income from './pages/Income';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/income' element={<Income/>} />
          <Route path='/expense' element={<Expense/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;