import { Button } from '@chakra-ui/button';

interface PaginationProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange
}: PaginationProps) {
  if (isCurrent) {
    return (
      <Button
        font="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      font="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
      >
      {number}
    </Button>
  )
}