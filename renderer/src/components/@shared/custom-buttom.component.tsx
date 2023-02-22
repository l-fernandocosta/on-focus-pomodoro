import { Button } from '@chakra-ui/react';

export interface CustomButtonProps {
  isActive: boolean;
  title: string;
}

export const CustomButton = ({ isActive, title }: CustomButtonProps) => {
  return (
    <Button
      bgGradient={isActive ? 'linear(to-l, #7928CA, #FF0080)' : 'none'}
      variant={isActive ? 'solid' : 'outline'}
      size='sm'
      fontSize={'sm'}
      fontWeight='thin'
      transition={'all 0.2s'}
      _hover={{
        transform: 'translateY(-2px)',
      }}
    >
      {title}
    </Button>
  );
};
