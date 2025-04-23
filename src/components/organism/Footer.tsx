import { Box, Text } from "@chakra-ui/react";
import { Container } from "../atom/Container";

export const Footer = () => {
	return (
		<Box as="footer" bg="gray.800" color="white" py={8} textAlign="center">
			<Container>
				<Text>
					&copy; {new Date().getFullYear()} Yu Hirabayashi. All Rights Reserved.
				</Text>
			</Container>
		</Box>
	);
};
