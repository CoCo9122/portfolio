import { Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Container } from "../atom/Container";
import { Heading } from "../atom/Heading";
import { Text } from "../atom/Text";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export const Header = () => {
	return (
		<Box
			as="header"
			position="relative"
			minH="30vh"
			display="flex"
			alignItems="center"
			overflow="hidden"
			bg="linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)"
			css={{
				"@keyframes float": {
					"0%": { transform: "translateY(0px) rotate(0deg)" },
					"33%": { transform: "translateY(-10px) rotate(5deg)" },
					"66%": { transform: "translateY(5px) rotate(-3deg)" },
					"100%": { transform: "translateY(0px) rotate(0deg)" },
				},
				"@keyframes gridMove": {
					"0%": { transform: "translate(0, 0)" },
					"100%": { transform: "translate(20px, 20px)" },
				},
			}}
		>
			{/* Animated background grid */}
			<Box
				position="absolute"
				top="0"
				left="0"
				width="calc(100% + 40px)"
				height="calc(100% + 40px)"
				opacity="0.1"
				backgroundImage="radial-gradient(circle, #00d4ff 1px, transparent 1px)"
				backgroundSize="40px 40px"
				css={{ animation: "gridMove 10s ease-in-out infinite alternate" }}
			/>

			{/* Floating geometric elements */}
			<Box
				position="absolute"
				top="10%"
				right="10%"
				width="100px"
				height="100px"
				border="2px solid"
				borderColor="brand.400"
				borderRadius="md"
				css={{ animation: "float 6s ease-in-out infinite" }}
				opacity="0.3"
			/>
			<Box
				position="absolute"
				bottom="20%"
				left="5%"
				width="60px"
				height="60px"
				bg="purple.500"
				borderRadius="full"
				css={{ animation: "float 8s ease-in-out infinite" }}
				opacity="0.2"
			/>
			<Box
				position="absolute"
				top="30%"
				left="15%"
				width="80px"
				height="80px"
				border="2px solid"
				borderColor="cyan.400"
				transform="rotate(45deg)"
				css={{ animation: "float 7s ease-in-out infinite" }}
				opacity="0.3"
			/>

			<Container position="relative" zIndex={2}>
				<MotionVStack
					spacing={8}
					textAlign="center"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					{/* Glowing name */}
					<MotionBox
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						<Heading
							as="h1"
							size="4xl"
							bgGradient="linear(to-r, brand.400, cyan.400, purple.400)"
							bgClip="text"
							textShadow="0 0 20px rgba(0, 212, 255, 0.5)"
							mb={4}
							fontWeight="800"
						>
							Yu Hirabayashi
						</Heading>
					</MotionBox>

					{/* Typing animation subtitle */}
					<MotionBox
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
					>
						<Text
							fontSize="xl"
							color="gray.300"
							maxW="800px"
							lineHeight="1.8"
							fontWeight="300"
						>
							技術力とコミュニケーション力を活かして、
							<Box as="span" color="brand.400" fontWeight="500">
								0→1の立ち上げ
							</Box>
							から
							<Box as="span" color="cyan.400" fontWeight="500">
								1→100の運用・改善
							</Box>
							までを実現できる
							<Box
								as="span"
								bgGradient="linear(to-r, purple.400, cyan.400)"
								bgClip="text"
								fontWeight="600"
							>
								フルスタック＆AIエンジニア
							</Box>
						</Text>
					</MotionBox>
				</MotionVStack>
			</Container>
		</Box>
	);
};
