import {useState} from 'react'
import './App.css';
import Index from './components/Sidebar/Index'
import Chat from './components/Chat/Chat'
import Login from './components/Login/Login'
import {BrowserRouter as  Router, Route , Switch ,  } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
      const [{user} , dispatch] = useStateValue();

  return (
    <div className="app">
    {!user ? ( <Login /> ) : 
    ( <div className="app_bar">
      <Router>
          <Index />
          <Switch>
          <Route path="/rooms/:roomId"> 
            <Chat />
          </Route>
          <Route path="/"><Chat /></Route>
          </Switch>
      </Router>
     </div>
    
    )}
    </div> 
  );
}

export default App;
