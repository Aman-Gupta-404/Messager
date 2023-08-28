import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("userInfo"));

    if (_user) {
      navigate("/chats");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Container
      maxW="xl"
      centerContent
      // backgroundImage="url('')"
    >
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        width={"100%"}
        m="40px 0 15px 0"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text
          fontSize={"4xl"}
          fontFamily={"work sans"}
          color={"black"}
          textAlign={"center"}
        >
          Messanger
        </Text>
      </Box>
      <Box bg={"white"} w="100%" p="4" borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
