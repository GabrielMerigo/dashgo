import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { RiInputMethodLine, RiGitMergeLine, RiDashboardLine, RiContactsLine } from 'react-icons/ri';
import { NavSection } from './NavSection';

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">

        <NavSection title="GERAL">
          <Link display="flex" align="center" >
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Dashboard</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Usuários</Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <Link display="flex" align="center" >
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Formulário</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Automação</Text>
          </Link>
        </NavSection>

      </Stack>
    </Box>
  )
}