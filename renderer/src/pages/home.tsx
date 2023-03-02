import { CustomButton } from '@/components/@shared/custom-buttom.component';
import { FocusCategoryButton } from '@/components/@shared/focus-category.component';
import { Header } from '@/components/@shared/header.component';
import { useTimer } from '@/hooks/use-timer';
import Confetti from 'react-confetti';

import {
  Button,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { ModalPomodoroEnd } from '@/components/@shared/modal-pomodoro-end.component';
import {
  BackpackIcon,
  ClockIcon,
  GitHubLogoIcon,
  PlusCircledIcon,
  ReloadIcon,
  RocketIcon,
  Share1Icon,
  StopIcon,
} from '@radix-ui/react-icons';

function Home() {
  const disclosure = useDisclosure();

  const {
    getMinute,
    onStartNewSession,
    restartTimer,
    isActive,
    timer,
    toggleClock,
  } = useTimer();

  const ThrowConfettiWhenIsDone = () => {
    if (timer === 0) {
      return <Confetti />;
    }
  };
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
            {getMinute(timer)}
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
            <FocusCategoryButton
              name={'Studies'}
              color={'orange.300'}
              isSelected={true}
              icon={RocketIcon}
            />
            <FocusCategoryButton
              name={'Coding'}
              color={'purple.300'}
              isSelected={false}
              icon={GitHubLogoIcon}
            />
            <FocusCategoryButton
              name={'Job'}
              color={'red.300'}
              isSelected={false}
              icon={BackpackIcon}
            />
            <Flex
              w='100%'
              gap={5}
              h='5rem'
              borderWidth={1}
              justify='center'
              borderRadius='md'
              color='gray.600'
              alignItems={'center'}
            >
              <PlusCircledIcon />
              <Text>New category</Text>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex w='100%' alignItems={'center'} justify='center' gap='5'>
        <Button
          h='5rem'
          w='60%'
          onClick={onStartNewSession}
          bgGradient={'linear(to-l, #7928CA, #FF0080)'}
        >
          {!isActive ? 'START' : 'PAUSE'} SESSION
        </Button>

        <Flex h='5rem' flexDir={'column'} gap='1'>
          {ThrowConfettiWhenIsDone()}
          <IconButton
            h='5rem'
            onClick={restartTimer}
            aria-label='Restart timer'
            icon={<ReloadIcon />}
            w='10%'
          />
          <IconButton
            h='5rem'
            onClick={toggleClock}
            aria-label='Stop timer'
            icon={<StopIcon />}
            w='10%'
          />
        </Flex>
      </Flex>
      <ModalPomodoroEnd disclosure={disclosure} />
    </Flex>
  );
}

export default Home;
