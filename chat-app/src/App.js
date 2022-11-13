import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client'; 
import Home from './pages/home';
import Chat from './pages/chat';
import NewRoom from './pages/rooms/newroom';
import JoinRoom from './pages/rooms/joinroom';

const socket = io.connect('http://localhost:4000'); // Server will run on port 4000, so we connect to it from here


function App() {
  const [username, setUsername] = useState(''); //User's Name
  const [room, setRoom] = useState(''); // Room Code

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newroom' 
            element={
              <NewRoom 
              username={username} 
              setUsername={setUsername} 
              room={room} 
              setRoom={setRoom}
              socket={socket}
              />
            } 
          />
          <Route path='/joinroom' 
            element={
              <JoinRoom 
              username={username} 
              setUsername={setUsername} 
              room={room} 
              setRoom={setRoom}
              socket={socket}
              />
          } 
          />
          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;