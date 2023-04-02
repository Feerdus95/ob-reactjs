import logo from './logo.svg';
import './App.css';
/*import Greeting from './components/pure/greeting';*/
/*import Greetingf from './components/pure/greetingF';*/
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        {/*Componentes de Greeting y GreetingF:*/}
        {/*<Greeting name="Mamu"></Greeting>*/}
        {/*<Greetingf name="Mamu"></Greetingf>*/}
        {/*Componente de Listado de Tareas:*/}
        <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
