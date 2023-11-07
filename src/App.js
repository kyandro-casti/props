import './App.css';
import ParentToChild from './props/Parenttochild/ParentToChild';
import ChildToParent from './props/ChildToParent/ChildToParent.js';
function App() {
  return (
    <div className="App">
      <ParentToChild/>
      <ChildToParent/>
    </div>
  );
}

export default App;
