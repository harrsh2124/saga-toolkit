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

      <p>
        GitHub repo -{" "}
        <a
          href="https://github.com/harrsh2124/saga-toolkit"
          target={"_blank"}
          rel="noreferrer"
        >
          github.com/harrsh2124/saga-toolkit
        </a>
      </p>
    </div>
  );
}

export default App;
