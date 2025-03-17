import { HistoryCard } from '@/components/HistoryCard';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useState } from 'react';
import { SectionList } from 'react-native';


export default function TabHistory() {
  const [exercises, setExercises] = useState([
    {
      title: '22.07.24',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '23.07.24',
      data: ['Puxada frontal'],
    },
  ])

  return (
    <VStack className='bg-zinc-100 dark:bg-zinc-950 flex-1 gap-4'>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard className='p-2 m-2 active:opacity-70 bg-white rounded-xl shadow-lg shadow-zinc-950' />}
        renderSectionHeader={({ section }) => (
          <Heading size="md">
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text>
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer execícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>  
    
  );
}
