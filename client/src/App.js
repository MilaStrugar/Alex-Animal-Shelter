import { Router } from '@reach/router';
import './App.css';
import AddPet from './components/AddPet';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter:</h1>
      <Router>
        <AllPets path="/" />
        <OnePet path="/pet/:allPetsid" />
        <AddPet path="/pet" />
        <EditPet path="/pet/update/:addPetsid" />
      </Router>
    </div>
  );
}

export default App;
