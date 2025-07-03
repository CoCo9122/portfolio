import {
	Container as ChakraContainer,
	type ContainerProps,
} from "@chakra-ui/react";

interface CustomContainerProps extends ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children, ...props }: CustomContainerProps) => {
	return (
		<ChakraContainer maxW="1200px" px={4} {...props}>
			{children}
		</ChakraContainer>
	);
};
