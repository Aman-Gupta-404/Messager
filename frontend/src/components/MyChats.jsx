import { useState, useEffect } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { getSender } from "../config/chatlogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";

function MyChats({ fetchAgain }) {
  const [loggedUser, setLoggedUser] = useState();

  const { user, setUser, selectedChat, setSelectedChat, chat, setChat } =
    ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chats", config);
      console.log("data is: ", data);
      setChat(data);
    } catch (error) {
      toast({
        title: "Error occured",
        description: "failed to load the chats",
        status: "error",
        duration: 4000,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir={"column"}
      alignItems={"center"}
      p={3}
      bg={"white"}
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth={"1px"}
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily={"Work sans"}
        display={"flex"}
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        My Chats
        <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AiOutlinePlusCircle />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        p={3}
        bg={"#f8f8f8"}
        w={"100%"}
        h={"100%"}
        borderRadius={"lg"}
        overflow={"hidden"}
      >
        {chat ? (
          <Stack overflowY={"scroll"}>
            {chat.map((singleChat) => {
              console.log("grp is: ", singleChat.isGroupChat);
              return (
                <Box
                  onClick={() => setSelectedChat(singleChat)}
                  cursor={"pointer"}
                  bg={selectedChat === singleChat ? "#39b2ac" : "#e9e9e9"}
                  color={selectedChat === singleChat ? "white" : "black"}
                  px={3}
                  py={2}
                  borderRadius={"lg"}
                  key={singleChat._id}
                >
                  <Text>
                    {!singleChat.isGroupChat ? (
                      getSender(loggedUser, singleChat.users)
                    ) : (
                      <>{singleChat.chatName}</>
                    )}
                  </Text>
                </Box>
              );
            })}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
}

export default MyChats;
