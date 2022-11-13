import styles from '../../pages/home/styles.module.css';
import { useNavigate } from 'react-router-dom'; // Add this

const NewRoom = ({ username, setUsername, room, setRoom, socket }) => {

    const navigate = useNavigate();

    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join_room', { room, username });
        }
        navigate('/chat', { replace: true }); 
    };


    // const newRoomSubmit = (e) => {
    //     //const path
    //     e.preventDefault();
    //     //localStorage.setItem('userName', userName);
    //     navigate('/newroom');
    // };

    // const joinRoomSubmit = (e) => {
    //     //const path
    //     e.preventDefault();
    //     //localStorage.setItem('userName', userName);
    //     navigate('/joinroom');
    // };

  return (
    <div className={styles.container}>
      <div className={styles.roomContainer}>
        <div className={styles.autoLayout}>
            <h1>{"Create Room Code"}</h1>
            <input className={styles.input} placeholder='Enter Code...'  value={room} onChange={(e) => setRoom(e.target.value)} />
            <h1>{"Enter Name"}</h1>
            <input className={styles.input} placeholder='Enter Name...' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className={"room-buttons"}>
                <button className='btn btn-room'onClick={joinRoom}>Create Room</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;