import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    const newRoomSubmit = () => {
        navigate('/newroom',);
    };

    const joinRoomSubmit = () => {
        navigate('/joinroom',{ replace: true });
    };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{"Get Ready to Chat"}</h1>

        <div className={"home-buttons"}>
            <button className='btn btn-secondary' onClick={newRoomSubmit}>Create New Room</button>
            <button className='btn btn-secondary' onClick={joinRoomSubmit}>Join a Room</button>
        </div>

        {/* <input className={styles.input} placeholder='Username...' />

        <select className={styles.input}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select> */}

      </div>
    </div>
  );
};

export default Home;