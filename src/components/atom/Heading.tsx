import { Heading as ChakraHeading, type HeadingProps } from "@chakra-ui/react";

interface CustomHeadingProps extends HeadingProps {
	children: React.ReactNode;
}

export const Heading = ({ children, ...props }: CustomHeadingProps) => {
	return <ChakraHeading {...props}>{children}</ChakraHeading>;
};
