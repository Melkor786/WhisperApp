import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) navigate("/");
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

const ChatComponent = () => {
  // Your chat component logic
  return <div>Chat Component</div>;
};

const App = () => {
  return (
    <Router>
      <ChatProvider>
        <ChatComponent /> {/* Replace with your actual chat component */}
      </ChatProvider>
    </Router>
  );
};

export default App;
