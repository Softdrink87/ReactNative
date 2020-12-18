import React, {Componenet} from 'react';
import './TodoListTemplate';

class App extends Component {
  render() {
    return (
      <div>
      <b>App</b>
      <TodoListTemplate>oh yeah~~</TodoListTemplate>
      </div>
    );
  }
}

export default App;