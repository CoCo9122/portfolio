import { type BadgeProps, Badge as ChakraBadge } from "@chakra-ui/react";

interface CustomBadgeProps extends BadgeProps {
	children: React.ReactNode;
}

export const Badge = ({ children, ...props }: CustomBadgeProps) => {
	return (
		<ChakraBadge
			bg="blue.500"
			color="white"
			borderRadius="md"
			px={2}
			py={1}
			mr={2}
			mb={2}
			fontSize="xs"
			{...props}
		>
			{children}
		</ChakraBadge>
	);
};
