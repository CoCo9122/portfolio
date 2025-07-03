import { type ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

// Define types for different button variants
type ButtonAsButton = ButtonProps & {
	as?: "button" | undefined;
};

type ButtonAsAnchor = ButtonProps & {
	href: string;
	target?: string;
	rel?: string;
};

// Union type that covers both cases
export type CustomButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = ({ children, ...props }: CustomButtonProps) => {
	return (
		<ChakraButton
			variant="gradient"
			borderRadius="xl"
			px={8}
			py={6}
			fontSize="md"
			fontWeight="600"
			css={{
				transition: "all 0.3s ease",
				"&:hover": {
					transform: "translateY(-2px) scale(1.02)",
				},
				"&:active": {
					transform: "translateY(0) scale(0.98)",
				},
			}}
			{...props}
		>
			{children}
		</ChakraButton>
	);
};
