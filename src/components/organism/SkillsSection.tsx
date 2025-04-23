import { Box, SimpleGrid, Heading, List, ListItem } from "@chakra-ui/react";
import { SectionHeading } from "../molecule/SectionHeading";
import { Container } from "../atom/Container";

interface SkillCategoryProps {
	title: string;
	skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
	return (
		<Box>
			<Heading as="h3" size="md" mb={4}>
				{title}
			</Heading>
			<List spacing={2}>
				{skills.map((skill) => (
					<ListItem
						key={skill}
						bg="white"
						p={2}
						borderRadius="md"
						boxShadow="sm"
					>
						{skill}
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export const SkillsSection = () => {
	const skillCategories = [
		{
			title: "フロントエンド",
			skills: ["React (Next.js)", "Chakra UI", "jotai", "lexical", "Flutter"],
		},
		{
			title: "バックエンド",
			skills: ["Python", "Django", "Flask", "Ruby (Ruby on Rails)"],
		},
		{
			title: "インフラ・クラウド",
			skills: ["Kubernetes", "Docker", "GCP", "Firebase"],
		},
		{
			title: "AI/ML",
			skills: ["Tensorflow", "Pytorch", "Computer Vision"],
		},
		{
			title: "勉強中の技術",
			skills: ["Web3.0 (Blockchain, イーサリアム, Wallet)", "WebAR技術", "MCP"],
		},
	];

	return (
		<Box as="section" py={16} bg="gray.50" id="skills">
			<Container>
				<SectionHeading>技術スタック</SectionHeading>
				<SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
					{skillCategories.map((category) => (
						<SkillCategory
							key={category.title}
							title={category.title}
							skills={category.skills}
						/>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
