import styles from './styles.module.css';
import MessagesReceived from './messages';
import SendMessage from './send-message';
import RoomAndUsersColumn from './room-and-users'; // Add this


const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div className={styles.formContainer}>
        <MessagesReceived socket={socket} username={username}/>
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;