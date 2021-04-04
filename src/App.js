import Header from './Header';
import Login from './Login';

function App() {
  return (
    <div className="container">
     <Header/>
     {false ? 'welcome ': <Login/> }
    </div>
  );
}

export default App;
