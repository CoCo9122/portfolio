import {
	AspectRatio,
	Box,
	Button,
	Divider,
	Grid,
	GridItem,
	Heading,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

interface HackathonDetailProps {
	title: string;
	content: string | React.ReactNode;
}

const HackathonDetail = ({ title, content }: HackathonDetailProps) => (
	<Box mb={4}>
		<Heading as="h3" size="sm" mb={2} color="blue.600">
			{title}
		</Heading>
		{typeof content === "string" ? <Text>{content}</Text> : content}
	</Box>
);

// Define the interface for a hackathon's data
export interface HackathonData {
	title: string;
	period: string;
	award: string;
	theme: string;
	project: string;
	role: string;
	contributions: string[];
	learnings: string[];
	requirements: {
		frontend: {
			language: string;
			framework: string;
			cssFramework?: string;
			libraries: string[];
		};
		backend: {
			language: string;
			framework: string;
			libraries: string[];
		};
		infrastructure: {
			server: string;
			container?: string;
			auth?: string;
			loadBalancer?: string;
		};
		ai?: string[];
		cicd?: string[];
		tools: string[];
	};
	articleLink?: string;
	demoVideo?: {
		type: "local" | "youtube";
		url: string;
	};
}

interface HackathonModalProps {
	isOpen: boolean;
	onClose: () => void;
	hackathonData: HackathonData;
}

export const HackathonModal = ({
	isOpen,
	onClose,
	hackathonData,
}: HackathonModalProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
			<ModalOverlay bg="blackAlpha.600" backdropFilter="blur(5px)" />
			<ModalContent bg="white" mx={4}>
				<ModalHeader borderBottom="1px solid" borderColor="gray.200">
					{hackathonData.title}
				</ModalHeader>
				<ModalCloseButton />

				<ModalBody py={6}>
					<VStack spacing={6} align="stretch">
						<Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
							<GridItem>
								<HackathonDetail title="期間" content={hackathonData.period} />
							</GridItem>
							<GridItem>
								<HackathonDetail title="受賞" content={hackathonData.award} />
							</GridItem>
						</Grid>

						<Divider />

						{/* Demo Video Section */}
						{hackathonData.demoVideo && (
							<>
								<Heading as="h3" size="sm" mb={2} color="blue.600">
									デモ映像
								</Heading>
								<AspectRatio ratio={16 / 9} mb={4}>
									{hackathonData.demoVideo.type === "local" ? (
										<video
											ref={videoRef}
											controls
											src={hackathonData.demoVideo.url}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "contain",
											}}
										/>
									) : (
										<iframe
											title={`${hackathonData.title} Demo`}
											src={hackathonData.demoVideo.url}
											allowFullScreen
										/>
									)}
								</AspectRatio>
								<Divider />
							</>
						)}

						<HackathonDetail title="テーマ" content={hackathonData.theme} />

						<HackathonDetail
							title="作成した作品"
							content={hackathonData.project}
						/>

						<HackathonDetail title="役割" content={hackathonData.role} />

						<Divider />

						<HackathonDetail
							title="貢献"
							content={
								<UnorderedList spacing={2} pl={4}>
									{hackathonData.contributions.map((contribution) => {
										const items = contribution.split(": ");

										return (
											<ListItem key={contribution}>
												<Text>
													<strong>{items[0]}</strong>:{items[1]}
												</Text>
											</ListItem>
										);
									})}
								</UnorderedList>
							}
						/>

						<HackathonDetail
							title="学び"
							content={
								<UnorderedList spacing={2} pl={4}>
									{hackathonData.learnings.map((learning) => {
										const items = learning.split(": ");

										return (
											<ListItem key={learning}>
												<Text>
													<strong>{items[0]}</strong>:{items[1]}
												</Text>
											</ListItem>
										);
									})}
								</UnorderedList>
							}
						/>

						<Divider />

						<HackathonDetail
							title="開発要件"
							content={
								<Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
									<GridItem>
										<Box mb={4}>
											<Heading as="h4" size="xs" mb={2} color="blue.500">
												フロントエンジニア
											</Heading>
											<UnorderedList pl={4}>
												<ListItem>
													<Text>
														言語：{hackathonData.requirements.frontend.language}
													</Text>
												</ListItem>
												<ListItem>
													<Text>
														フレームワーク：
														{hackathonData.requirements.frontend.framework}
													</Text>
												</ListItem>
												{hackathonData.requirements.frontend.cssFramework && (
													<ListItem>
														<Text>
															CSSフレームワーク：
															{hackathonData.requirements.frontend.cssFramework}
														</Text>
													</ListItem>
												)}
												<ListItem>
													<Text>
														ライブラリ：
														{hackathonData.requirements.frontend.libraries.join(
															"、",
														)}
													</Text>
												</ListItem>
											</UnorderedList>
										</Box>

										<Box mb={4}>
											<Heading as="h4" size="xs" mb={2} color="blue.500">
												バックエンドエンジニア
											</Heading>
											<UnorderedList pl={4}>
												<ListItem>
													<Text>
														言語：{hackathonData.requirements.backend.language}
													</Text>
												</ListItem>
												<ListItem>
													<Text>
														Webフレームワーク：
														{hackathonData.requirements.backend.framework}
													</Text>
												</ListItem>
												<ListItem>
													<Text>
														ライブラリ：
														{hackathonData.requirements.backend.libraries.join(
															"、",
														)}
													</Text>
												</ListItem>
											</UnorderedList>
										</Box>
									</GridItem>

									<GridItem>
										<Box mb={4}>
											<Heading as="h4" size="xs" mb={2} color="blue.500">
												インフラエンジニア
											</Heading>
											<UnorderedList pl={4}>
												<ListItem>
													<Text>
														サーバ：
														{hackathonData.requirements.infrastructure.server}
													</Text>
												</ListItem>
												{hackathonData.requirements.infrastructure
													.container && (
													<ListItem>
														<Text>
															コンテナ：
															{
																hackathonData.requirements.infrastructure
																	.container
															}
														</Text>
													</ListItem>
												)}
												{hackathonData.requirements.infrastructure.auth && (
													<ListItem>
														<Text>
															認証：
															{hackathonData.requirements.infrastructure.auth}
														</Text>
													</ListItem>
												)}
												{hackathonData.requirements.infrastructure
													.loadBalancer && (
													<ListItem>
														<Text>
															LB：
															{
																hackathonData.requirements.infrastructure
																	.loadBalancer
															}
														</Text>
													</ListItem>
												)}
											</UnorderedList>
										</Box>

										{hackathonData.requirements.ai && (
											<Box mb={4}>
												<Heading as="h4" size="xs" mb={2} color="blue.500">
													AI
												</Heading>
												<UnorderedList pl={4}>
													{hackathonData.requirements.ai.map((tech) => (
														<ListItem key={tech}>
															<Text>{tech}</Text>
														</ListItem>
													))}
												</UnorderedList>
											</Box>
										)}

										{hackathonData.requirements.cicd && (
											<Box mb={4}>
												<Heading as="h4" size="xs" mb={2} color="blue.500">
													CI/CD
												</Heading>
												<UnorderedList pl={4}>
													{hackathonData.requirements.cicd.map((cicd) => (
														<ListItem key={cicd}>
															<Text>{cicd}</Text>
														</ListItem>
													))}
												</UnorderedList>
											</Box>
										)}

										<Box>
											<Heading as="h4" size="xs" mb={2} color="blue.500">
												周辺ツール
											</Heading>
											<UnorderedList pl={4}>
												{hackathonData.requirements.tools.map((tool) => (
													<ListItem key={tool}>
														<Text>{tool}</Text>
													</ListItem>
												))}
											</UnorderedList>
										</Box>
									</GridItem>
								</Grid>
							}
						/>
					</VStack>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						閉じる
					</Button>
					{hackathonData.articleLink && (
						<Button
							as="a"
							href={hackathonData.articleLink}
							target="_blank"
							variant="outline"
						>
							記事を見る
						</Button>
					)}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

// Create specific modal components using the generic HackathonModal
export const XRHackathonModal = ({
	isOpen,
	onClose,
}: Omit<HackathonModalProps, "hackathonData">) => {
	const xrHackathonData: HackathonData = {
		title: "enXross XRHackathonの参加",
		period: "2024年6月4日 ~ 2024年7月4日",
		award: "パートナー賞の受賞",
		theme:
			"XR×エンタメ XRを活用し東京ドームシティでの体験をアップデートするアイディア・プロダクト",
		project: "簡単にARゲームを作成できるWEBアプリの作成",
		role: "バックエンド、フロントエンドからインフラ、CI/CDをすべて担当するフルスタックエンジニアの担当",
		contributions: [
			"フルスタック開発による迅速なプロトタイプ構築: バックエンド（Django/Python）、フロントエンド（React/JavaScript）、インフラ（Conoha VPS, k3s, Traefik）、CI/CD（GitHub Actions）まで一貫して担当し、短期間でARゲーム作成Webアプリのプロトタイプを開発。これにより、アイデアの早期検証と実現可能性の実証に大きく貢献。",
			"AR機能とWebアプリの統合: 8th Wallを活用したAR機能とReactベースのWebアプリケーションをスムーズに統合。ユーザーが直感的にARゲームを作成・体験できるインターフェースをMaterial UIで実装し、エンタメ体験の向上に貢献。",
			"堅牢なインフラ基盤の構築と運用: Conoha VPS上にk3sを用いたKubernetesクラスタを構築し、アプリケーションの安定稼働を実現。Traefikによる負荷分散、ZeroSSLによるHTTPS証明書適用など、本番環境を意識したインフラ設計・運用により、セキュアで可用性の高いシステム基盤を確立。",
			"効率的な開発ワークフローの実現: GitHub Actionsを用いたCI/CDパイプラインを構築し、コードの品質維持とデプロイの自動化を実現。開発効率を大幅に向上させ、短期間での成果創出に貢献。Jiraを活用したタスク管理により、チーム開発の進捗を可視化し、円滑なコミュニケーションを促進。",
		],
		learnings: [
			"XR技術を活用したエンタメの可能性: 8th WallをはじめとするXR関連技術を実際に活用することで、現実空間と仮想空間を融合させた新しいエンタメ体験の創出の可能性を肌で感じることができた。特に、東京ドームシティという具体的な場所を舞台にすることで、XRがもたらす没入感とインタラクティブ性の高さを実感。",
			"フルスタック開発における広範な知識と連携の重要性: フロントエンドからバックエンド、インフラまで一気通貫で開発を経験したことで、それぞれの技術領域の知識だけでなく、それらを連携させることの重要性を再認識。異なる技術間の制約や依存関係を理解し、全体最適の視点を持って開発を進めることの重要性を学んだ。",
			"短期間での成果創出における優先順位付けと効率的な開発: 1ヶ月という限られた期間の中で成果を出すために、要件定義から実装、テスト、デプロイまでを効率的に進めるための計画力と実行力を磨くことができた。",
			"チームでの成果創出におけるコミュニケーションと役割分担: チームメンバーとDiscordやJiraを通じて密に連携し、それぞれの得意なスキルを活かしながら協力して開発を進めることの重要性を改めて認識。自身の役割を理解し、責任を持ってタスクを遂行することで、チームとしての成果に貢献できることを学んだ。パートナー賞の受賞は、チーム全体の協力と成果が認められた結果であり、大きな自信につながった。",
		],
		requirements: {
			frontend: {
				language: "Javascript",
				framework: "React",
				cssFramework: "Material UI",
				libraries: ["8th wall", "jotai", "axios", "jwt"],
			},
			backend: {
				language: "Python",
				framework: "Django",
				libraries: ["django-cors-headers", "djangorestframework-simplejwt"],
			},
			infrastructure: {
				server: "Conoha VPS",
				container: "k3s(kubernetes)",
				auth: "ZeroSSL",
				loadBalancer: "Ingress traefik",
			},
			cicd: ["CD/CD：Github Actions"],
			tools: [
				"ソース管理：Github",
				"コミュニケーション：Discord",
				"タスク管理：Jira",
			],
		},
		articleLink:
			"https://www.softbank.jp/biz/blog/cloud-technology/articles/202412/enxross-finalist-react-8thwall/",
		demoVideo: {
			type: "local",
			url: "./movies/xr_hackathon.mp4",
		},
	};

	return (
		<HackathonModal
			isOpen={isOpen}
			onClose={onClose}
			hackathonData={xrHackathonData}
		/>
	);
};

export const AIAgentHackathonModal = ({
	isOpen,
	onClose,
}: Omit<HackathonModalProps, "hackathonData">) => {
	const aiAgentHackathonData: HackathonData = {
		title: "AI Agent Hackathon with Google Cloudの参加",
		period: "2024年12月19日 ~ 2025年2月10日",
		award: "総合第2位",
		theme: "AI Agentを用いたプロダクトの作成",
		project:
			"デジタル端末が完備された対面授業環境下で、新人教師でも、自分らしい授業を実現できるよう、授業準備から授業運営、採点・フィードバックまでを包括的にサポートするシステム",
		role: "チームリーダー及び、バックエンド、フロントエンドからインフラ、CI/CDをすべて担当するフルスタックエンジニアとして担当",
		contributions: [
			"チームリーダーシップとプロジェクト推進: チームリーダーとして、プロダクトのビジョン策定からタスクの割り振り、進捗管理までを行い、チームを総合2位の受賞へと導きました。メンバーの能力を最大限に引き出し、目標達成に向けて効果的にチームをまとめるリーダーシップを発揮しました。",
			"フルスタック開発による包括的なシステム構築: バックエンド（Python, Flask, Firebase）、フロントエンド（Dart, Flutter）、インフラ（Cloud Run）を全て担当し、授業準備から運営、採点・フィードバックまでをサポートする包括的な教育支援システムを短期間で開発しました。",
			"AI Agentと教育現場のニーズの統合: GeminiやSpeech to Text、Langchainといった最先端のAI技術を教育現場の課題と結びつけ、新人教師でも自分らしい授業を実現できる革新的なプロダクトを開発しました。AI Agentを活用することで、授業準備の効率化、個別最適化されたフィードバックの提供、採点業務の自動化などを実現し、教育現場のDXに貢献しました。",
			"FirebaseとCloud Runによるスケーラブルなインフラ構築: FirebaseのNoSQLデータベース、認証、ストレージ機能と、Cloud Runによるサーバーレスなバックエンド環境を組み合わせることで、高い可用性とスケーラビリティを持つインフラ基盤を構築しました。",
			"効率的な開発ワークフローの構築: GitHub Actionsを用いたCI/CDパイプラインを構築し、迅速な開発と安定した品質を両立しました。Notionを活用したタスク管理により、チーム全体の進捗状況を可視化し、円滑なコミュニケーションを促進しました。",
		],
		learnings: [
			"AI Agentを活用したプロダクト開発の可能性と課題: Geminiをはじめとする大規模言語モデルや音声認識技術を教育分野に応用することで、授業の質向上や教師の負担軽減に大きく貢献できる可能性を感じました。一方で、AIの精度や倫理的な課題、教育現場への導入におけるハードルなど、今後の検討課題も明確になりました。",
			"チームリーダーとしての役割と責任: チームを率いる中で、メンバーのモチベーション維持、意見の集約、意思決定の迅速さなど、リーダーシップを発揮するための様々なスキルが求められることを実感しました。反省点としては、より早い段階でメンバーの得意なことや興味関心を把握し、タスクを割り振るべきだったという学びがありました。",
			"フルスタック開発における技術選定と統合の重要性: 短期間で成果を出すために、各技術の特性を理解し、最適な組み合わせを選択することの重要性を改めて認識しました。特に、FirebaseのようなBaaSとサーバーレス環境であるCloud Runを組み合わせることで、開発効率とスケーラビリティを両立できることを学びました。",
			"教育現場の課題に対する深い理解の必要性: 開発を進める中で、実際の教育現場が抱える課題やニーズをより深く理解することの重要性を痛感しました。今後は、ユーザーインタビューなどを通じて、より現場のニーズに合致したプロダクト開発を目指したいと考えました。",
			"大規模なHackathonにおける時間管理と優先順位付け: 約2ヶ月間の開発期間の中で、限られたリソースを最大限に活用するために、タスクの優先順位付けや時間管理の重要性を改めて学びました。特に、AI関連技術の検証には時間がかかるため、早期に技術調査を開始することの重要性を認識しました。",
		],
		requirements: {
			frontend: {
				language: "Dart",
				framework: "Flutter",
				libraries: [],
			},
			backend: {
				language: "Python, Firebase",
				framework: "Flask",
				libraries: ["Firebase: firestore, auth, storage"],
			},
			infrastructure: {
				server: "Cloud Run",
			},
			ai: ["Gemini", "Speech To Text", "Langchain"],
			tools: [
				"ソース管理：Github",
				"コミュニケーション：Discord",
				"タスク管理：Notion",
			],
		},
		demoVideo: {
			type: "youtube",
			url: "https://www.youtube.com/embed/kF9nuw77AOo",
		},
	};

	return (
		<HackathonModal
			isOpen={isOpen}
			onClose={onClose}
			hackathonData={aiAgentHackathonData}
		/>
	);
};
