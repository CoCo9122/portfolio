import { Box, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Container } from "../atom/Container";
import { Text } from "../atom/Text";
import { SectionHeading } from "../molecule/SectionHeading";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);

export const AboutSection = () => {
	return (
		<Box
			as="section"
			py={20}
			id="about"
			bg="dark.800"
			position="relative"
			overflow="hidden"
		>
			{/* Background pattern */}
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				opacity="0.03"
				backgroundImage="linear-gradient(45deg, #38b2ac 25%, transparent 25%), linear-gradient(-45deg, #38b2ac 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #38b2ac 75%), linear-gradient(-45deg, transparent 75%, #38b2ac 75%)"
				backgroundSize="20px 20px"
				backgroundPosition="0 0, 0 10px, 10px -10px, -10px 0px"
			/>

			<Container position="relative" zIndex={1}>
				<SectionHeading>自己紹介</SectionHeading>

				<Grid
					templateColumns={{ base: "1fr", lg: "300px 1fr" }}
					gap={12}
					alignItems="start"
				>
					<GridItem>
						<MotionBox
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							textAlign="center"
						>
							<MotionImage
								src="./images/me.png"
								alt="プロフィール画像"
								borderRadius="20px"
								width="250px"
								height="300px"
								objectFit="cover"
								border="3px solid"
								borderColor="brand.400"
								boxShadow="0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(56, 178, 172, 0.2)"
								whileHover={{
									scale: 1.05,
									boxShadow:
										"0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(56, 178, 172, 0.4)",
								}}
								transition={{ type: "spring", stiffness: 300 }}
							/>
						</MotionBox>
					</GridItem>

					<GridItem>
						<MotionVStack
							spacing={6}
							align="flex-start"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<MotionBox
								p={6}
								bg="rgba(56, 178, 172, 0.05)"
								borderRadius="xl"
								border="1px solid"
								borderColor="brand.400"
								backdropFilter="blur(10px)"
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Text color="gray.300" lineHeight="1.8" fontSize="lg">
									<Box as="span" color="brand.400" fontWeight="600">
										ソフトバンク株式会社
									</Box>
									にて、社内システムのSRE・データ基盤運用、生成AIを活用した業務自動化、社外向けプロダクトのWebアプリケーション開発など、複数領域で横断的に活動。SRE、Webフルスタック、生成AI、動画編集といったスキルセットを活かし、要件定義から実装・運用・CI/CD整備・プロダクトマネジメントまで一貫して担当。
								</Text>
							</MotionBox>

							<MotionBox
								p={6}
								bg="rgba(128, 90, 213, 0.05)"
								borderRadius="xl"
								border="1px solid"
								borderColor="purple.400"
								backdropFilter="blur(10px)"
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Text color="gray.300" lineHeight="1.8" fontSize="lg">
									<Box as="span" color="purple.400" fontWeight="600">
										個人事業主・フリーランスエンジニア
									</Box>
									としても複数のプロジェクトに参画。スポーツ映像解析・画像検索・自然言語処理・VLM・RAG構成など最先端AI技術のR&Dや、業務要件に応じたAI応用の技術選定・検証・実装を主導。さらに、スタートアップにおけるPMFフェーズのプロダクト開発リードも担当するなど、技術とビジネスの橋渡し役も担う。
								</Text>
							</MotionBox>

							<MotionBox
								p={6}
								bg="rgba(0, 212, 255, 0.05)"
								borderRadius="xl"
								border="1px solid"
								borderColor="cyan.400"
								backdropFilter="blur(10px)"
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Text color="gray.300" lineHeight="1.8" fontSize="lg">
									<Box as="span" color="cyan.400" fontWeight="600">
										受賞歴・資格・学術ジャーナル
									</Box>
									での論文執筆経験など、アウトプットへの意識も高く、技術力とビジネス視点を兼ね備えたエンジニアとして、貢献の幅を広げていきたいと考えています。
								</Text>
							</MotionBox>
						</MotionVStack>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};
