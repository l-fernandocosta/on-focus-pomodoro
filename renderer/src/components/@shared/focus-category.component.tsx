import { Circle, Flex, Icon, Text } from '@chakra-ui/react';

export interface FocusCategoryButtonProps {
  name: string;
  color: string;
  isSelected: boolean;
  icon: any;
}

export const FocusCategoryButton = ({
  color,
  isSelected,
  icon,
  name,
}: FocusCategoryButtonProps) => {
  return (
    <Flex
      px={5}
      w='100%'
      cursor={'pointer'}
      _hover={{
        borderColor: color,
      }}
      height={'5rem'}
      borderWidth={1}
      borderRadius='md'
      position='relative'
      alignItems={'center'}
      transition={'all 0.3s'}
      justifyContent='space-between'
      borderColor={isSelected ? color : 'none'}
    >
      <Flex gap={2} alignItems={'center'}>
        <Icon as={icon} />
        <Text>{name}</Text>
      </Flex>
      <Circle bgColor={color} size='5' />

      {isSelected && (
        <Flex
          w='100%'
          backdropFilter='auto'
          backdropBlur='lg'
          h='100%'
          position='absolute'
          borderRadius={'md'}
          left={0}
          alignItems='center'
          justify={'center'}
          gap={5}
          borderColor='transparent'
          overflow={'hidden'}
        >
          <Icon as={icon} />
          <Text>{name}</Text>
        </Flex>
      )}
    </Flex>
  );
};
