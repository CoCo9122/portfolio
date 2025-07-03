import {
	Box,
	ButtonGroup,
	Flex,
	Heading,
	Image,
	List,
	ListItem,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "../atom/Button";
import { Container } from "../atom/Container";
import {
	AIAgentHackathonModal,
	XRHackathonModal,
} from "../atom/HackathonModal";
import { SectionHeading } from "../molecule/SectionHeading";

// Define the type of hackathon for modal selection
type HackathonType = "XR" | "AI_AGENT" | null;

interface AchievementItemProps {
	title: string;
	description: string;
	imageUrl: string;
	link?: string;
	isHackathon?: boolean;
	hackathonType?: HackathonType;
	onDetailsClick?: () => void;
}

const AchievementItem = ({
	title,
	description,
	imageUrl,
	link,
	isHackathon,
	onDetailsClick,
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
					<ButtonGroup spacing={3}>
						{link && (
							<Button as="a" href={link} target="_blank" size="sm">
								記事を見る
							</Button>
						)}
						{isHackathon && (
							<Button
								size="sm"
								variant="outline"
								colorScheme="green"
								onClick={onDetailsClick}
							>
								詳細を見る
							</Button>
						)}
					</ButtonGroup>
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
	// State to track which hackathon modal to open
	const [_, setCurrentHackathon] = useState<HackathonType>(null);

	// Disclosures for each modal
	const xrHackathonModal = useDisclosure();
	const aiAgentHackathonModal = useDisclosure();

	// Handler for opening the appropriate modal
	const handleOpenModal = (hackathonType: HackathonType) => {
		setCurrentHackathon(hackathonType);
		if (hackathonType === "XR") {
			xrHackathonModal.onOpen();
		} else if (hackathonType === "AI_AGENT") {
			aiAgentHackathonModal.onOpen();
		}
	};

	const awards = [
		{
			title: "enXross XRHackathonのパートナー受賞",
			description:
				"XR技術を活用した革新的なソリューションの開発でパートナー賞を受賞",
			imageUrl: "images/xr-hackthon.webp",
			link: "https://www.softbank.jp/biz/blog/cloud-technology/articles/202412/enxross-finalist-react-8thwall/",
			isHackathon: true,
			hackathonType: "XR" as HackathonType,
		},
		{
			title: "AI Agent Hackathon with Google Cloud",
			description:
				"Google Cloudを活用したAIエージェント開発ハッカソンにて第2位を受賞",
			imageUrl: "images/ai-agent-hackathon.jpg",
			link: "https://zenn.dev/hackathons/2024-google-cloud-japan-ai-hackathon",
			isHackathon: true,
			hackathonType: "AI_AGENT" as HackathonType,
		},
		{
			title: "ソフトバンク × 博報堂テクノロジーズ 競争ハッカソン",
			description: "AWSと福島の人の魅力を伝える開発ハッカソンにて第3位を受賞",
			imageUrl: "",
			link: "https://k-tai.watch.impress.co.jp/docs/news/2022257.html",
			isHackathon: false,
			hackathonType: null,
		},
		{
			title: "AWS Summit Japan 2025 生成AIハッカソン",
			description: "AWSの生成AIを活用した開発ハッカソンにて決勝戦に進出",
			imageUrl: "",
			link: "https://pages.awscloud.com/summit-japan-2025-genai-hackathon-info.html",
			isHackathon: false,
			hackathonType: null,
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
								isHackathon={award.isHackathon}
								hackathonType={award.hackathonType}
								onDetailsClick={() =>
									award.hackathonType && handleOpenModal(award.hackathonType)
								}
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

				{/* Hackathon Modals */}
				<XRHackathonModal
					isOpen={xrHackathonModal.isOpen}
					onClose={xrHackathonModal.onClose}
				/>
				<AIAgentHackathonModal
					isOpen={aiAgentHackathonModal.isOpen}
					onClose={aiAgentHackathonModal.onClose}
				/>
			</Container>
		</Box>
	);
};
