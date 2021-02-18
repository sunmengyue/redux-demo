import './app.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className='app'>
      <h1>This is my fancy facebook app</h1>
      <Login />
      <Header />
      <Feed />
    </div>
  );
}

export default App;
