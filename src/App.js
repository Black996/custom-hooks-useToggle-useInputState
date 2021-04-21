import './App.css';
import SimpleFormHooks from './SimpleFormHook';
import SimpleFormInputHook from './SimpleFormInputHook';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormInputHook />
    </div>
  );
}

export default App;
