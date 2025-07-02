import { ScreenHeader } from '@/components/ScreenHeader';
import { Button } from '@/@template/components/ui/button';
import { Card } from '@/@template/components/ui/card';
import { Center } from '@/@template/components/ui/center';
import { HStack } from '@/@template/components/ui/hstack';
import { Image } from '@/@template/components/ui/image';
import { VStack } from '@/@template/components/ui/vstack';
import { router, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function Exercise() {
  const { id } = useLocalSearchParams();

  return (
    <VStack className='flex-1'>
      <ScreenHeader title="Exercise" action={() => { router.back() }} />
      <HStack className='w-full justify-between gap-4 bg-white items-center py-4 px-6'>
        <Text className='text-xl font-bold'>Puxada frontal</Text>
        <Text className='text-xl'>Costas</Text>
      </HStack>
      <VStack className='flex-1 items-center py-8 gap-4'>

        <Card className='w-96 h-96'>
          <Image 
            source={{
              uri: 'https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp'
            }} 
            alt="Imagem do exercício" 
            size="xl"
            className='w-full h-full'
          />
        </Card>
        <Card className='w-96 p-4 gap-8'>
          <Center className='gap-4 flex flex-row justify-evenly'>
            <Text>séries</Text>
            <Text>repetições</Text>
          </Center>
          <Center>
            <Button variant='solid' size='xl' action='primary' className='w-full bg-green-600'>
              <Text className='text-white font-bold'>Marcar como realizado</Text>
            </Button>
          </Center>
        </Card>
      </VStack>
    </VStack>
  );
}
