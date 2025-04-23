import {
	Box,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
	List,
	ListItem,
} from "@chakra-ui/react";
import { SectionHeading } from "../molecule/SectionHeading";
import { Container } from "../atom/Container";
import { Button } from "../atom/Button";

interface AchievementItemProps {
	title: string;
	description: string;
	imageUrl: string;
	link?: string;
}

const AchievementItem = ({
	title,
	description,
	imageUrl,
	link,
}: AchievementItemProps) => {
	return (
		<Box bg="white" p={6} borderRadius="lg" mb={6} boxShadow="md">
			<Flex
				direction={{ base: "column", md: "row" }}
				gap={8}
				alignItems="center"
			>
				<Box flex="2" minW={{ base: "100%", md: "300px" }}>
					<Heading as="h4" size="md" mb={3}>
						{title}
					</Heading>
					<Text mb={4}>{description}</Text>
					{link && (
						<Button as="a" href={link} target="_blank" size="sm">
							詳細を見る
						</Button>
					)}
				</Box>
				<Box flex="1" minW={{ base: "100%", md: "250px" }}>
					<Image
						src={imageUrl}
						alt={title}
						w="100%"
						borderRadius="md"
						boxShadow="sm"
					/>
				</Box>
			</Flex>
		</Box>
	);
};

export const AchievementsSection = () => {
	const awards = [
		{
			title: "enXross XRHackathonのパートナー受賞",
			description:
				"XR技術を活用した革新的なソリューションの開発でパートナー賞を受賞",
			imageUrl: "images/xr-hackthon.webp",
			link: "https://www.softbank.jp/biz/blog/cloud-technology/articles/202412/enxross-finalist-react-8thwall/",
		},
		{
			title: "AI Agent Hackathon with Google Cloud",
			description:
				"Google Cloudを活用したAIエージェント開発ハッカソンにて第2位を受賞",
			imageUrl: "images/ai-agent-hackathon.jpg",
			link: "https://zenn.dev/hackathons/2024-google-cloud-japan-ai-hackathon",
		},
	];

	const papers = [
		{
			title:
				"Deep learning for three-dimensional segmentation of electron microscopy images of complex ceramic materials",
			description:
				"複雑なセラミック材料の電子顕微鏡画像の3次元セグメンテーションのためのディープラーニングに関する研究",
			imageUrl: "images/paper_1.webp",
			link: "https://www.nature.com/articles/s41524-024-01226-5",
		},
	];

	const certifications = [
		"ITIL4 - ITサービス管理のベストプラクティス (2023年取得)",
		"Microsoft Certified: Azure Fundamentals - Microsoftのクラウドサービスの基礎知識 (2022年取得)",
		"CKAD: Certified Kubernetes Application Developer - Kubernetesアプリケーション開発者認定 (2022年取得)",
		"CKA: Certified Kubernetes Administrator - Kubernetes管理者認定 (2023年取得)",
	];

	return (
		<Box as="section" py={16} id="achievements">
			<Container>
				<SectionHeading>受賞歴・論文・資格</SectionHeading>

				<VStack spacing={10} align="stretch">
					<Box>
						<Heading as="h3" size="md" mb={6} color={"blue.50"}>
							受賞歴
						</Heading>
						{awards.map((award) => (
							<AchievementItem
								key={award.title}
								title={award.title}
								description={award.description}
								imageUrl={award.imageUrl}
								link={award.link}
							/>
						))}
					</Box>

					<Box>
						<Heading as="h3" size="md" mb={6} color={"blue.50"}>
							ジャーナル論文
						</Heading>
						{papers.map((paper) => (
							<AchievementItem
								key={paper.title}
								title={paper.title}
								description={paper.description}
								imageUrl={paper.imageUrl}
								link={paper.link}
							/>
						))}
					</Box>

					<Box>
						<Heading as="h3" size="md" mb={6} color={"blue.50"}>
							資格
						</Heading>
						<Box bg="white" p={6} borderRadius="lg" boxShadow="md">
							<List spacing={2}>
								{certifications.map((cert) => (
									<ListItem key={cert}>
										<Text>{cert}</Text>
									</ListItem>
								))}
							</List>
						</Box>
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};
