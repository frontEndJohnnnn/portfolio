import './App.css';
import NavBar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      {/* Nav Bar here... */}
      <NavBar />
      {/* Routes  */}
      <HomePage />

      {/* Profile here... */}
    </div>
  );
}

export default App;
