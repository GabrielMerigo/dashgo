import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import dynamic from 'next/dynamic' ;

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const option = {

};

const series = [
  {name: 'series1', data: [21, 233, 12, 123, 76, 45]}
];

export default function Dashboard(){
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mg="4">Inscritos da Semana</Text>
            <Chart options={option} series={series} type="area" height={160} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mg="4">Taxa de Abetura</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}