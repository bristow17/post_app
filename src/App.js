import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/search' element={<SearchPost/>}/>
      <Route path='/delete' element={<DeletePost/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
