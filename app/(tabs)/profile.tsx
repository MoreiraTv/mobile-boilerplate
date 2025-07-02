import { ScreenHeader } from '@/components/ScreenHeader';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/@template/components/ui/avatar';
import { Button } from '@/@template/components/ui/button';
import { Input, InputField } from '@/@template/components/ui/input';
import { Text } from '@/@template/components/ui/text';
import { VStack } from '@/@template/components/ui/vstack';

export default function TabProfile() {
  return (
    <VStack className='flex-1'>
      <ScreenHeader title="Perfil" />

      <VStack className='flex items-center p-10 gap-4'>
        <Avatar size="2xl">
          <AvatarFallbackText>Jane Doe</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </Avatar>
        <Text className='font-bold mb-4'>Alterar foto</Text>

        <Input
          className='p-2'
          variant="outline"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField className='' placeholder="Nome" />
        </Input>

        <Input
          className='p-2'
          variant="outline"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField className='' placeholder="Email" />
        </Input>

        <Text className='mt-10 text-xl font-bold self-start'>Alterar senha</Text>

        <Input
          className='p-2'
          variant="outline"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField className='' placeholder="Senha antiga" />
        </Input>

        <Input
          className='p-2'
          variant="outline"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField className='' placeholder="Nova senha" />
        </Input>

        <Button variant='solid' size='xl' action='primary' className='w-full bg-green-600 h-16 mt-4'>
          <Text className='text-white text-xl font-bold'>Atualizar</Text>
        </Button>
        
      </VStack>

    </VStack>
  );
}
