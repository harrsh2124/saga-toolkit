import "./App.css";
import Todo from "./features/todo/Todo";
import User from "./features/user/User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <User />
      </header>
    </div>
  );
}

export default App;
