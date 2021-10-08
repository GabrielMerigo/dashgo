import { Link as ChakraLink, Text, Icon, LinkProps } from "@chakra-ui/react";
import { ElementType } from 'react';
import Link from 'next/link';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link>
      <ChakraLink display="flex" align="center" {...rest} >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}