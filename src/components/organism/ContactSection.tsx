import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import { Container } from "../atom/Container";
import { Text } from "../atom/Text";
import { SectionHeading } from "../molecule/SectionHeading";

export const ContactSection = () => {
	return (
		<Box as="section" py={16} id="contact">
			<Container>
				<SectionHeading>お問い合わせ</SectionHeading>
				<VStack spacing={1} align="left">
					<Text color={"blue.50"}>
						副業のご依頼やご質問はLinkedinのつながりからのメッセージでご連絡ください。
					</Text>

					<Flex justifyContent="left" mt={1}>
						<Link
							href="https://www.linkedin.com/in/coco9122/"
							target="_blank"
							display="flex"
							alignItems="center"
							color="blue.500"
							fontSize="xl"
							_hover={{ textDecoration: "none", color: "blue.50" }}
						>
							<Box as="span" mr={2}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</Box>
							LinkedIn
						</Link>
					</Flex>
				</VStack>
			</Container>
		</Box>
	);
};
