import { Box, flexbox } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function UserBadgeItem({ user, handleFunction }) {
  return (
    <Box
      px={2}
      py={1}
      borderRadius={"lg"}
      m={1}
      mb={2}
      variant={"solid"}
      backgroundColor={"#1d915b"}
      color={"white"}
      cursor={"pointer"}
      onClick={handleFunction}
      display={"flex"}
      alignItems={"center"}
      gap={1}
    >
      {user.name}
      <AiOutlineClose />
    </Box>
  );
}

export default UserBadgeItem;
