import { AppBar } from '@mui/material';
import './App.css';
import ButtonAppBar from './Appbar';
import Grid from './Grid';

function App() {
  return (
    <div>
     <div className="App">
      <ButtonAppBar />
      <AppBar />
     </div>
     <div>
      <Grid />
     </div>
    </div>
  );
}

export default App;
