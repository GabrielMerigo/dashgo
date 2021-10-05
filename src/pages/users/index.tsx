import {
  Box,
  Thead,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Checkbox,
  Tr,
  Th,
  Tbody,
  Td,
  Text
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";


export default function UserList() {
  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        </Box>
      </Flex>
    </Box>
  )
}