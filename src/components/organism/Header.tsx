import { Box, VStack } from "@chakra-ui/react";
import { Container } from "../atom/Container";
import { Heading } from "../atom/Heading";
import { Text } from "../atom/Text";

export const Header = () => {
	return (
		<Box
			as="header"
			bgImage="url('./images/header-bg.jpg')"
			bgSize="cover"
			bgPosition="center"
			position="relative"
			color="white"
			py={16}
			textAlign="center"
			_before={{
				content: "''",
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				bg: "rgba(0, 0, 0, 0.5)",
				zIndex: 1,
			}}
		>
			<Container position="relative" zIndex={2}>
				<VStack spacing={4}>
					<Heading as="h1" size="2xl">
						Yu Hirabayashi's Portfolio
					</Heading>
					<Text fontSize="lg">
						フロントエンドからバックエンド、インフラまで幅広い技術スタックを持つAIエンジニア
					</Text>
				</VStack>
			</Container>
		</Box>
	);
};
