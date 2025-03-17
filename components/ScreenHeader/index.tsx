import { Button } from "../ui/button"
import { Center } from "../ui/center"
import { Heading } from "../ui/heading"
import { HStack } from "../ui/hstack"
import { Icon, ArrowLeftIcon } from "../ui/icon"
import { VStack } from "../ui/vstack"

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