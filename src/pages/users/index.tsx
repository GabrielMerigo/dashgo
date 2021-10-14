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
  Text,
  useBreakpointValue,
  Spinner
} from "@chakra-ui/react";

import Link from 'next/link';
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { useQuery } from "react-query";


export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    return data
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header></Header>
      <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Listagem de Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao Obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px="6">
                      <Checkbox colorScheme="6" color="gray.300" width="8" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id} >
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="6" color="gray.300" width="8" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.created_at}</Td>}
                      </Tr>
                    )
                  })}

                </Tbody>

              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}