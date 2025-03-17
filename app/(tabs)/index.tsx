import { Header, HeaderAvatar, HeaderButton, HeaderButtonIcon, HeaderTitle } from '@/components/header';
import { VStack } from '@/components/ui/vstack';
import { ChevronRightIcon } from "@/components/ui/icon"
import { FlatList, Text } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { ExerciseCard } from '@/components/ExerciseCard';
import { Link } from 'expo-router';

export default function TabHome() {
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Puxada baixa',
    'Puxada alta',
    'Puxada frontal 2',
    'Puxada frontal 3',
    'Puxada frontal 4',
  ])
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro'])

  return (
    <VStack className='bg-zinc-100 dark:bg-zinc-950 flex-1'>
      <VStack className='bg-zinc-900'>
        <Header className='bg-zinc-100 dark:bg-zinc-800 py-8 border-b border-zinc-700 rounded-b-2xl'>
          <HStack className='gap-4'>
            <HeaderAvatar 
              size="lg" 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
              fallback="Jane Doe" 
            />
            <VStack>
              <HeaderTitle>Hello, Jane!</HeaderTitle>
              <Heading size='sm' className='dark:text-white'>@janedoe</Heading>
            </VStack>
          </HStack>
          
          <HeaderButton size='md' variant='link' className='p-2'>
            <HeaderButtonIcon as={ChevronRightIcon} size="xl" className="text-zinc-950 w-8 h-8" />
          </HeaderButton>
        </Header>

        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Button className='rounded-xl text-white' action='primary' variant='solid' size='xl'>
              <ButtonText>{item}</ButtonText>
            </Button>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32, gap: 16 }}
          style={{ marginVertical: 16, maxHeight: 44, minHeight: 44 }}
        />


      </VStack>
      <VStack className='p-4 flex-1 h-full ' >
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({item, index}) => (
            <Link href={{
              pathname: '../exercise/[id]',
              params: { id: index },
            }}
            asChild
            >
              <ExerciseCard title={item} description={item} image='' onPress={() => {}} className='p-2 m-2 active:opacity-70 bg-white rounded-xl shadow-lg shadow-zinc-950' />
            </Link>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          style={{ flex: 1 }}
        />

      </VStack>

    </VStack>
  );
}
