import './app.css';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <div className='app'>
      <h1>This is my fancy facebook app</h1>
      <h3>
        {state.user ? `Logged in as ${state.user}` : 'No user is logged in'}
      </h3>
      <Login />
    </div>
  );
}

export default App;
