import { Card } from "../ui/card"
import { Heading } from "../ui/heading"
import { Text } from "../ui/text"
import { Image } from "../ui/image"
import { VStack } from "../ui/vstack"
// import { Pressable, IPressableProps } from "../ui/pressable"

type Props = {
  title: string
  description: string
  image: string
  className?: string
}

export function ExerciseCard({ 
  title,
  description,
  image,
  ...props
 }: Props) {
  return (
    <Card size="md" 
      variant="elevated" 
      className="flex flex-row gap-8 bg-transparent"
      {...props}
    >
      <Image
        source={{
          uri: 'https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp',
        }}
        size="md"
        alt="Imagem do exercício"
        resizeMode="cover"
      />

      <VStack className="bg-transparent">
        <Heading size="md" className="mb-1 bg-transparent">
          {title}
        </Heading>
        <Text size="sm" className="bg-transparent">
          {description}
        </Text>
      </VStack>
    </Card>
  )
}