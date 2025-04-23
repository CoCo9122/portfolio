import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import { SectionHeading } from "../molecule/SectionHeading";
import { Container } from "../atom/Container";
import { Text } from "../atom/Text";

export const AboutSection = () => {
	return (
		<Box as="section" py={16} id="about">
			<Container>
				<SectionHeading>自己紹介</SectionHeading>
				<Flex
					direction={{ base: "column", md: "row" }}
					align={{ base: "center", md: "flex-start" }}
					gap={8}
				>
					<Image
						src="./images/me.png"
						alt="プロフィール画像"
						borderRadius="full"
						boxSize="200px"
						objectFit="cover"
						border="4px solid white"
						boxShadow="md"
					/>
					<VStack spacing={4} align="flex-start">
						<Text color={"blue.50"}>
							ソフトバンク株式会社での3年以上のエンジニア経験を積み、フロントエンドやバックエンド、インフラの開発から運用に携わってきました。また、新しい技術への探究心を持ち、Web3.0やWebAR技術などにも積極的に取り組んでいます。
						</Text>
						<Text color={"blue.50"}>
							副業ではPolaris.AIにて画像認識のうちの一つであるTracking技術のR/D開発の案件に携わった経験があります。
						</Text>
						<Text color={"blue.50"}>
							幅広い技術スタックを駆使したフルスタックエンジニアとしてのキャリアを展開しています。これまでの経験を活かし、より高度なプロジェクトに挑戦したいと考えています。また、受賞歴や資格、ジャーナル論文の執筆経験があり、幅広い視野での活躍が可能です。
						</Text>
					</VStack>
				</Flex>
			</Container>
		</Box>
	);
};
