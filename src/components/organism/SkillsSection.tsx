import {
	Box,
	HStack,
	Heading,
	List,
	ListItem,
	SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Container } from "../atom/Container";
import { SectionHeading } from "../molecule/SectionHeading";

interface SkillCategoryProps {
	title: string;
	skills: string[];
	icon: string;
}

const MotionBox = motion(Box);
const MotionListItem = motion(ListItem);

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
	return (
		<MotionBox
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<Box
				bg="rgba(56, 178, 172, 0.03)"
				p={6}
				borderRadius="2xl"
				border="1px solid"
				borderColor="brand.400"
				backdropFilter="blur(10px)"
				h="full"
				_hover={{
					borderColor: "cyan.400",
					boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)",
				}}
				transition="all 0.3s ease"
			>
				<HStack mb={6} spacing={3}>
					<Box
						fontSize="2xl"
						color="brand.400"
						display="flex"
						alignItems="center"
						justifyContent="center"
						width="40px"
						height="40px"
						bg="rgba(56, 178, 172, 0.1)"
						borderRadius="lg"
					>
						{icon}
					</Box>
					<Heading as="h3" size="lg" color="white" fontWeight="700">
						{title}
					</Heading>
				</HStack>
				<List spacing={3}>
					{skills.map((skill, index) => (
						<MotionListItem
							key={skill}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Box
								p={3}
								bg="rgba(255, 255, 255, 0.02)"
								borderRadius="lg"
								border="1px solid rgba(56, 178, 172, 0.2)"
								color="gray.300"
								fontWeight="500"
								_hover={{
									bg: "rgba(56, 178, 172, 0.05)",
									borderColor: "brand.400",
									color: "white",
									transform: "translateX(5px)",
								}}
								transition="all 0.3s ease"
							>
								{skill}
							</Box>
						</MotionListItem>
					))}
				</List>
			</Box>
		</MotionBox>
	);
};

export const SkillsSection = () => {
	const skillCategories = [
		{
			title: "フロントエンド",
			icon: "⚛️",
			skills: ["React", "Flutter", "NextJS"],
		},
		{
			title: "バックエンド",
			icon: "🚀",
			skills: ["Python(Django/Flask/FastAPI)", "Ruby on Rails"],
		},
		{
			title: "インフラ・クラウド",
			icon: "☁️",
			skills: ["Kubernetes", "Docker", "GCP/AWS/Azure", "Firebase"],
		},
		{
			title: "AI/ML",
			icon: "🤖",
			skills: ["TensorFlow/PyTorch", "LangChain", "Computer Vision", "LLM/RAG"],
		},
		{
			title: "勉強中の技術",
			icon: "📚",
			skills: ["Web3.0 & Blockchain", "WebAR技術", "MCP"],
		},
	];

	return (
		<Box
			as="section"
			py={20}
			bg="dark.900"
			id="skills"
			position="relative"
			overflow="hidden"
		>
			{/* Background effects */}
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				opacity="0.02"
				backgroundImage="radial-gradient(circle at 25% 25%, #38b2ac 0%, transparent 50%), radial-gradient(circle at 75% 75%, #9f7aea 0%, transparent 50%)"
			/>

			<Container position="relative" zIndex={1}>
				<SectionHeading>技術スタック</SectionHeading>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<SkillCategory
								title={category.title}
								skills={category.skills}
								icon={category.icon}
							/>
						</motion.div>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
