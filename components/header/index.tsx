import { HStack } from "@/components/ui/hstack"
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button, ButtonText } from "@/components/ui/button"
import { Icon } from "../ui/icon"
import { cn } from "@/lib/utils"
import { Heading } from "../ui/heading"

export function Header({ children, className }: { children?: React.ReactNode, className?: string }) {
  
  return (
    <HStack className={cn("w-full flex items-center justify-between p-4", className)}>
      {children}
    </HStack>
  )
}

export function HeaderTitle({ children, className }: { children?: React.ReactNode, className?: string }) {
  return (
    <Heading size="xl" className={cn(className, "")}>
      {children}
    </Heading>
  )
}

export function HeaderAvatar({ size, src, fallback }: { size: "sm" | "md" | "lg" | "xl" | "2xl" | "xs", src: string, fallback: string }) {
  return (
    <HStack>
      <Avatar size={size}>
        <AvatarFallbackText>{fallback}</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: src,
          }}
        />
        <AvatarBadge />
      </Avatar>
    </HStack>
  )
}

export function HeaderButton({ children, size="md", variant="solid", action, className="", onPress=() => {} }: { 
  children?: React.ReactNode, 
  size?: "sm" | "md" | "lg" | "xl" | "xs", 
  variant?: "link" | "outline" | "solid",
  action?: "primary" | "secondary" | "positive" | "negative" | "default" | undefined
  className?: string
  onPress?: () => void
}) {
  return (
    <Button size={size} variant={variant} action={action} className={className} onPress={onPress}>
      {children}
    </Button>
  )
}

export function HeaderButtonText ({ children, className="text-white" }: { children?: React.ReactNode, className?: string }) {
  return (
    <HStack>
      <ButtonText className={className}>{children}</ButtonText>
    </HStack>
  )
}

export function HeaderButtonIcon ({ as, size, className }: { as: React.ElementType, size?: "sm" | "md" | "lg" | "xl" | "xs" | "2xs", className?: string }) {
  return <Icon as={as} size={size} className={className} />
}