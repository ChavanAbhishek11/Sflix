
import RouteComponent from './Route';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      
       <h1>Welcome</h1>
      {isLoggedIn ? (
        <>
        <RouteComponent />
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
