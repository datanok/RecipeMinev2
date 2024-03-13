import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import RecipeList from './Components/RecipeList';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <main className='m-6 flex flex-col gap-5 justify-center'>
        <Search/>
        <RecipeList/>
        </main>
       
    </div>
  );
}

export default App;
