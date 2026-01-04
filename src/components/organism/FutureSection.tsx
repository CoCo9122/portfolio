import { Box, VStack } from "@chakra-ui/react";
import { Container } from "../atom/Container";
import { Heading } from "../atom/Heading";
import { Text } from "../atom/Text";
import { SectionHeading } from "../molecule/SectionHeading";

interface VisionItemProps {
	title: string;
	description: string;
}

const VisionItem = ({ title, description }: VisionItemProps) => {
	return (
		<Box bg="white" p={6} borderRadius="lg" mb={6} boxShadow="md">
			<Heading as="h3" size="md" mb={3} color="blackAlpha.900">
				{title}
			</Heading>
			<Text color="blackAlpha.800">{description}</Text>
		</Box>
	);
};

export const FutureSection = () => {
	const visionItems = [
		{
			title:
				"データ・AI・マテリアルインフォマティクスなどの高度技術領域への深耕",
			description:
				"PythonやFastAPI、LangChainを用いたAIシステム開発の経験を土台に、今後はデータ分析・機械学習・生成AIの応用をさらに深めていきたいと考えています。学術論文の執筆やAIコンペティションでの受賞実績もあり、実務と研究の両面から価値を提供できる人材を目指しています。",
		},
		{
			title: "Web3・XR・生成AIなどの先進領域へのチャレンジ",
			description:
				"これまでARゲーム作成プラットフォームや、WebアプリにAR・生成AIを組み込んだ開発を行ってきました。今後はWeb3（ブロックチェーンやスマートコントラクト）や空間コンピューティング（XR）、マルチモーダル生成AIなど、より未来志向の技術にも積極的に関わり、価値創出の最前線に立つエンジニアとして活躍していきたいと考えています。",
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
