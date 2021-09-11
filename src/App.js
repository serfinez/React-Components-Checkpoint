 import './App.css';
import Addrress from './Component/Profile/Addrress';
import FullName from './Component/Profile/FullName'
function App() {
  return (
    <div className="App">
       <FullName name={"serfinez"}/> 
       <Addrress address={"sousse"}></Addrress>
    </div>
  );
}

export default App;
