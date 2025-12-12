import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Container } from "../atom/Container";
import { ProjectCard } from "../molecule/ProjectCard";
import { SectionHeading } from "../molecule/SectionHeading";

export const ExperienceSection = () => {
	const experiences = [
		{
			title: "コールセンター向けの生成AIシステム開発",
			company: "ソフトバンク株式会社",
			period: "2025年4月〜2025年9月",
			description:
				"RAG構成を用いたチャット初回対応自動化システムの開発。FAQのベクトル化や検索精度改善、開発フロー整備まで幅広く担当。",
			tags: ["Python", "LangChain", "Azure AI Search", "Azure", "RAG"],
		},
		{
			title: "社内のデータ基盤運用と自動化",
			company: "ソフトバンク株式会社",
			period: "2022年8月〜2025年3月",
			description:
				"全社データ基盤の安定運用やCI/CD化、非機能要件レビューを推進。CDP領域にて自動リリース基盤を構築。",
			tags: ["Python", "CDP", "Redshift", "Databricks", "CI/CD"],
		},
		{
			title: "不正管理システムの運用改善",
			company: "ソフトバンク株式会社",
			period: "2022年8月〜2025年3月",
			description:
				"不正な通信を検知するシステムの運用改善を担当。自動化スクリプトや監視設計を通じて、手動対応時間を大幅削減。",
			tags: ["SRE", "Zabbix", "運用改善", "非機能要件"],
		},
		{
			title: "社内分析システムの移行と安定化",
			company: "ソフトバンク株式会社",
			period: "2022年8月〜2025年3月",
			description:
				"分析基盤の移行に伴うインシデント予測やZabbix・ElasticSearchによる可視化基盤構築を担当。",
			tags: ["ElasticSearch", "Zabbix", "分析基盤"],
		},
		{
			title: "Axross Recipe開発",
			company: "ソフトバンク株式会社",
			period: "2023年12月〜2025年9月",
			description:
				"WebフルスタックエンジニアとしてReact＋Railsで開発。CI/CDにも関与。",
			tags: [
				"React",
				"Ruby on Rails",
				"GCP",
				"Kubernetes",
				"Next.js",
				"GitHub Actions",
			],
		},
		{
			title: "スポーツにおける人物の追跡技術検証",
			company: "Polaris.AI株式会社（副業）",
			period: "2024年10月〜2025年2月",
			description:
				"定点カメラ映像から個別人物を検出・同期するAIアルゴリズムの開発。SAMURAIによるマスキングや音声ピーク同期処理を実装。",
			tags: ["Python", "OpenCV", "SAMURAI", "YOLOv11", "Scipy", "画像認識"],
		},
		{
			title: "売場写真の自然言語検索対応Webアプリ開発",
			company: "Polaris.AI株式会社（副業）",
			period: "2025年6月〜現在",
			description:
				"VLMとLangChainを活用し、自然言語で商品棚画像を検索可能なPoCを開発。Snowflake＋Azure Blobで構築。",
			tags: [
				"Python",
				"React",
				"LangChain",
				"FastAPI",
				"Chakra UI",
				"Azure",
				"Snowflake",
				"VLM",
			],
		},
		{
			title: "産業保健SaaSプロダクトの開発リード",
			company: "株式会社torchi（副業）",
			period: "2025年7月〜現在",
			description:
				"産業医業務を支援するOS構想のSaaS開発をPMFに向けて推進。技術選定や要件定義をリード。",
			tags: ["PMF", "SaaS", "プロダクト開発", "医療DX"],
		},
		{
			title: "10億Agent対応の向けたプロジェクトのAgent開発",
			company: "ソフトバンク株式会社",
			period: "2025年10月〜2026年1月",
			description:
				"10億Agent対応の向けたプロジェクトにて、主要Agentの設計・開発を担当。高負荷環境下での安定稼働を実現。",
			tags: ["Python", "AWS"],
		},
	];

	return (
		<Box as="section" py={16} id="experience">
			<Container>
				<SectionHeading>経験・実績</SectionHeading>
				<Heading as="h3" size="md" mb={6} color={"blue.50"}>
					会社・案件
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
					{experiences.map((exp) => (
						<ProjectCard
							key={exp.title}
							title={exp.title}
							company={exp.company}
							period={exp.period}
							description={exp.description}
							tags={exp.tags}
						/>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
