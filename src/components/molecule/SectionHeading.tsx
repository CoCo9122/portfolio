import { Box } from "@chakra-ui/react";
import { Heading } from "../atom/Heading";

interface SectionHeadingProps {
	children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
	return (
		<Box mb={8}>
			<Heading
				as="h2"
				fontSize="2xl"
				color="blue.600"
				borderBottom="2px solid"
				borderColor="blue.500"
				pb={2}
				display="inline-block"
			>
				{children}
			</Heading>
		</Box>
	);
};
