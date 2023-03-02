import { Avatar, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';

export const Header = () => {
  return (
    <Flex
      py={2}
      w='100%'
      h='4rem'
      px={'5'}
      position='sticky'
      marginBottom={10}
      zIndex={10}
      top={0}
      maxW={'100vw'}
      alignItems='center'
      borderBottomWidth={1}
      justify={'space-between'}
    >
      <Text
        color={'gray.300'}
        bgClip='text'
        fontWeight='bold'
        bgGradient={'linear(to-l, #7928CA, #FF0080)'}
      >
        on.focus
      </Text>

      <Tooltip
        hasArrow
        bgColor={'gray.700'}
        color='white'
        placement='bottom'
        label='See profile'
        size='sm'
        aria-label='See profile'
      >
        <Avatar
          size='sm'
          cursor='pointer'
          bgColor='blue.500'
          name='Fernando Costa'
        />
      </Tooltip>

      <Tooltip
        hasArrow
        placement='left'
        bgColor={'gray.700'}
        color='white'
        label={'See history'}
      >
        <IconButton
          size='sm'
          bg={'transparent'}
          _hover={{
            bgColor: 'gray.700',
          }}
          aria-label='See history'
          icon={<CounterClockwiseClockIcon />}
        />
      </Tooltip>
    </Flex>
  );
};
