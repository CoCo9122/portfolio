import { Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Heading } from "../atom/Heading";

interface SectionHeadingProps {
	children: React.ReactNode;
}

const MotionBox = motion(Box);

export const SectionHeading = ({ children }: SectionHeadingProps) => {
	return (
		<MotionBox
			mb={12}
			textAlign="center"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<VStack spacing={4}>
				<Heading
					as="h2"
					fontSize={{ base: "3xl", md: "4xl" }}
					bgGradient="linear(to-r, brand.400, cyan.400)"
					bgClip="text"
					fontWeight="800"
					position="relative"
					_after={{
						content: "''",
						position: "absolute",
						bottom: "-10px",
						left: "50%",
						transform: "translateX(-50%)",
						width: "80px",
						height: "4px",
						bg: "linear-gradient(90deg, #38b2ac, #00d4ff)",
						borderRadius: "full",
					}}
				>
					{children}
				</Heading>
				<Box
					width="40px"
					height="2px"
					bg="brand.400"
					borderRadius="full"
					opacity="0.6"
				/>
			</VStack>
		</MotionBox>
	);
};
