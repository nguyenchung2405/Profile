import './App.css';
import SoYeuLyLich from './components/profile/step1';
import Sidebar from './components/sidebar/Sidebar';
import StepsAntd from './components/steps/Steps';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <StepsAntd />
    </div>
  );
}

export default App;
