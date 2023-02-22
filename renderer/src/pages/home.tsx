import { CustomButton } from '@/components/@shared/custom-buttom.component';
import { Header } from '@/components/@shared/header.component';
import {
  Button,
  Circle,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  ClockIcon,
  GitHubLogoIcon,
  LaptopIcon,
  PlusIcon,
  RocketIcon,
  Share1Icon,
} from '@radix-ui/react-icons';

function Home() {
  return (
    <Flex width={'100%'} h='100%' flexDir={'column'} px={5} gap={5}>
      <Header />
      <Flex w='100%' alignItems={'center'} justify='center' flexDir={'column'}>
        <Flex gap={5} flex={1}>
          <CustomButton isActive={true} title='Pomodoro' />
          <CustomButton isActive={false} title='Short Break' />
          <CustomButton isActive={false} title='Long Break' />
          <Flex gap={1}>
            <IconButton
              size='sm'
              variant={'ghost'}
              icon={<Share1Icon />}
              aria-label='Share social media'
            />
            <IconButton
              size='sm'
              variant={'ghost'}
              icon={<ClockIcon />}
              aria-label='Time configuration'
            />
          </Flex>
        </Flex>

        <Flex
          w='100%'
          h={'100%'}
          alignItems='center'
          justify={'center'}
          flex={1}
        >
          <Text fontSize={'9xl'} fontWeight='bold'>
            25:00
          </Text>
        </Flex>

        <Flex w='60%' h='100%' flex={1} alignItems='center' flexDir={'column'}>
          <Heading
            fontWeight={'thin'}
            alignSelf='start'
            my={'5%'}
            fontSize='md'
          >
            What's your <strong>focus</strong> ?
          </Heading>

          <SimpleGrid w='100%' h='100%' flex={1} columns={2} gap={5}>
            <Flex
              height={'5rem'}
              position='relative'
              borderWidth={1}
              borderColor='orange.400'
              borderRadius='md'
              w='100%'
              px={5}
              alignItems={'center'}
              justifyContent='space-between'
            >
              <Flex gap={2} alignItems={'center'}>
                <RocketIcon />
                <Text> Studies</Text>
              </Flex>
              <Circle bgColor={'orange.500'} size='5' />
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
                <RocketIcon />
                <Text> Studies</Text>
              </Flex>
            </Flex>
            <Flex
              height={'5rem'}
              borderWidth={1}
              borderRadius='md'
              px={5}
              alignItems={'center'}
              justifyContent='space-between'
            >
              <Flex gap={2} alignItems={'center'}>
                <GitHubLogoIcon />
                <Text> Coding </Text>
              </Flex>
              <Circle bgColor={'green.500'} size='5' />
            </Flex>
            <Flex
              height={'5rem'}
              borderWidth={1}
              borderRadius='md'
              px={5}
              alignItems={'center'}
              justifyContent='space-between'
            >
              <Flex gap={2} alignItems={'center'}>
                <LaptopIcon />
                <Text> Work</Text>
              </Flex>
              <Circle bgColor={'purple.500'} size='5' />
            </Flex>
            <Flex
              gap={2}
              color='gray.500'
              height={'5rem'}
              borderWidth={1}
              borderRadius='md'
              alignItems={'center'}
              justifyContent='center'
            >
              <PlusIcon />
              <Text> New Category</Text>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex w='100%' alignItems={'center'} justify='center'>
        <Button h='5rem' w='60%' bgGradient={'linear(to-l, #7928CA, #FF0080)'}>
          START SESSION
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
