import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Merigo</Text>
        <Text color="gray.300" fontSize="small">
          gabrielmerigo@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Gabriel Merigo" />
    </Flex>
  );
}