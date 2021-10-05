import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";


export default function UserList() {
  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWight="normal">Criar Usuário</Heading>
        </Box>
      </Flex>
    </Box>
  )
}