import { Box, VStack } from "@chakra-ui/react";
import { SectionHeading } from "../molecule/SectionHeading";
import { Container } from "../atom/Container";
import { Heading } from "../atom/Heading";
import { Text } from "../atom/Text";

interface VisionItemProps {
	title: string;
	description: string;
}

const VisionItem = ({ title, description }: VisionItemProps) => {
	return (
		<Box bg="white" p={6} borderRadius="lg" mb={6} boxShadow="md">
			<Heading as="h3" size="md" mb={3}>
				{title}
			</Heading>
			<Text>{description}</Text>
		</Box>
	);
};

export const FutureSection = () => {
	const visionItems = [
		{
			title: "データサイエンティストへの転身",
			description:
				"これまでのPythonやDjangoなどのバックエンド開発経験を活かし、データ分析やマシンラーニングの分野でキャリアを展開したいと考えています。受賞歴やジャーナル論文の執筆経験も、データサイエンティストとしての実績として評価されると思います。今後はデータ分析やAI/MLに関する学習を深め、スキルアップを図っていきたいと思います。",
		},
		{
			title: "Web3.0やAR技術への取り組み",
			description:
				"新しい技術への探究心が強く、Web3.0分野(ブロックチェーン、イーサリアムなど)やAR技術の開発に積極的に取り組んでいきたいと考えています。これらの先進的な技術分野に挑戦し、新しい価値を生み出していくことに大きな興味があります。",
		},
	];

	return (
		<Box as="section" py={1} bg="gray.50" id="future">
			<Container>
				<SectionHeading>今後の展望</SectionHeading>
				<VStack spacing={1} align="stretch">
					{visionItems.map((item) => (
						<VisionItem
							key={item.title}
							title={item.title}
							description={item.description}
						/>
					))}
				</VStack>
			</Container>
		</Box>
	);
};
