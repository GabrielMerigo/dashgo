import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
  return(
    <Stack spacing="12" align="flex-start">
    <NavSection title="GERAL">
      <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
      <NavLink icon={RiContactsLine}>Usuários</NavLink>
    </NavSection>

    <NavSection title="AUTOMAÇÃO">
      <NavLink icon={RiDashboardLine}>Formulário</NavLink>
      <NavLink icon={RiContactsLine}>Automação</NavLink>
    </NavSection>
  </Stack>
  )
}