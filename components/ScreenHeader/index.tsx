import { Button } from "../../@template/components/ui/button"
import { Center } from "../../@template/components/ui/center"
import { Heading } from "../../@template/components/ui/heading"
import { HStack } from "../../@template/components/ui/hstack"
import { Icon, ArrowLeftIcon } from "../../@template/components/ui/icon"
import { VStack } from "../../@template/components/ui/vstack"

type Props = {
  title: string
  action?: () => void
}

export function ScreenHeader({ title, action }: Props) {
  return (
    <HStack className="w-full bg-white pb-4 pt-6">
      {action && (
        <VStack className="flex justify-center px-6">
          <Button onPress={action} variant="link" size="lg" className="bg-transparent">
            <Icon as={ArrowLeftIcon} size="xl" />
          </Button>
        </VStack>
      )}
      <Center className={`flex-1 ${ action && 'ml-[-5rem]'}`}>
        <Heading size="xl">
          {title}
        </Heading>
      </Center>
    </HStack>
  )
}