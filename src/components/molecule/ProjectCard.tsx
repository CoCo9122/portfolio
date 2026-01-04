import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Badge } from "../atom/Badge";
import { Button } from "../atom/Button";

interface ProjectCardProps {
	title: string;
	description: string;
	company?: string;
	period?: string;
	imageUrl?: string;
	tags: string[];
	link?: string;
}

export const ProjectCard = ({
	title,
	description,
	company,
	period,
	imageUrl,
	tags,
	link,
}: ProjectCardProps) => {
	return (
		<Box
			bg="white"
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
			transition="transform 0.3s"
			_hover={{ transform: "translateY(-5px)" }}
		>
			{imageUrl && (
				<Image
					src={imageUrl}
					alt={title}
					objectFit="cover"
					height="180px"
					width="100%"
				/>
			)}
			<VStack align="start" p={6} spacing={3}>
				<Heading as="h3" size="md" color="blue.600">
					{title}
				</Heading>
				{company && (
					<Text fontWeight="bold" color="blackAlpha.900">
						<strong>{company}</strong> {period && `| ${period}`}
					</Text>
				)}
				<Text color="blackAlpha.800">{description}</Text>
				<Flex flexWrap="wrap">
					{tags.map((tag) => (
						<Badge key={tag}>{tag}</Badge>
					))}
				</Flex>
				{link && (
					<Button as="a" href={link} target="_blank" size="sm">
						{link.includes("youtu.be") ? "動画を見る" : "詳細を見る"}
					</Button>
				)}
			</VStack>
		</Box>
	);
};
