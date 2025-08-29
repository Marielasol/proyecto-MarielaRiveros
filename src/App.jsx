import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/products/ItemListContainer.jsx';
import ItemDetailContainer from './components/products/itemDetailContainer.jsx';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
  
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;