import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { SectionHeading } from "../molecule/SectionHeading";
import { Container } from "../atom/Container";
import { ProjectCard } from "../molecule/ProjectCard";

export const ExperienceSection = () => {
	const experiences = [
		{
			title: "コールセンター向けのシステム開発業務",
			company: "ソフトバンク株式会社",
			period: "2025年4月〜",
			description: "コールセンター向けのチャットアプリのラグ化による業務改善",
			tags: ["Python", "Azure", "Rag"],
		},
		{
			title: "社内のデータ基盤運用",
			company: "ソフトバンク株式会社",
			period: "2024年4月〜2025年3月",
			description: "全社規模のデータ基盤運用担当",
			tags: ["CDP", "Redshift", "DataBricks"],
		},
		{
			title: "社内の不正管理システム運用",
			company: "ソフトバンク株式会社",
			period: "2023年4月〜2025年3月",
			description: "全社規模の不正管理システム運用担当",
			tags: [],
		},
		{
			title: "社内の分析システム運用",
			company: "ソフトバンク株式会社",
			period: "2023年4月〜2025年3月",
			description: "分析システム運用担当",
			tags: [],
		},
		{
			title: "Axross Recipe開発",
			company: "ソフトバンク株式会社",
			period: "2023年12月〜",
			description: "フロントエンドからバックエンド開発",
			tags: ["React", "Kubernetes", "NextJS", "GCP", "Ruby on Rails"],
		},
		{
			title: "スポーツにおける人物の追跡技術検証",
			company: "Polaris.AI株式会社（副業）",
			period: "2024年10月〜2025年1月",
			description: "スポーツにおけるトラッキング技術についてのR&Dに参画。",
			tags: ["Python", "OpenCV", "画像認識", "Tracking技術"],
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
