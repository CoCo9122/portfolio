import { Text as ChakraText, TextProps } from "@chakra-ui/react";

interface CustomTextProps extends TextProps {
	children: React.ReactNode;
}

export const Text = ({ children, ...props }: CustomTextProps) => {
	return <ChakraText {...props}>{children}</ChakraText>;
};
