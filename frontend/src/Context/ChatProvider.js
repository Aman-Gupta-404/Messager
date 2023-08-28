const { createContext, useContext, useEffect, useState } = require("react");
// import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chat, setChat] = useState([]);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("userInfo"));

    setUser(_user);

    // if (!_user) {
    //   navigate("/");
    // }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chat,
        setChat,
        notification,
        setNotification,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;
