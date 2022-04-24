import './App.css';
import './Components/Style.css';
import React from 'react';
import Home from './Components/Home';
import Header from './Components/Header';


const App= () => {
  return (
    <div>
    <Header/>
    <Home/>
    </div>
  );
}
export default App;

/*<Router>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Router>*/