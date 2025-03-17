import { Card, ICardProps } from "../ui/card";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

type Props = ICardProps & {}

export function HistoryCard({ ...props }: Props) {
  return (
    <Card size="md" 
      variant="elevated" 
      className="flex flex-row gap-8 bg-transparent"
      {...props}
    >
      <VStack className="flex-1">
        <Heading numberOfLines={1}>
          Costas
        </Heading>

        <Text numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text size="md">
        08:56
      </Text>
    </Card>
  )
}