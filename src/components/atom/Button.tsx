import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

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
			bg="blue.600"
			color="white"
			borderRadius="md"
			_hover={{ bg: "blue.700" }}
			{...props}
		>
			{children}
		</ChakraButton>
	);
};
