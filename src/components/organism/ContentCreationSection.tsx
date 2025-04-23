import { useState, useEffect } from "react";
import { Box, SimpleGrid, Heading, VStack } from "@chakra-ui/react";
import { SectionHeading } from "../molecule/SectionHeading";
import { Container } from "../atom/Container";
import { ProjectCard } from "../molecule/ProjectCard";

interface ZennArticle {
	title: string;
	link: string;
	description: string;
	imageUrl: string;
}

export const ContentCreationSection = () => {
	const [zennArticles, setZennArticles] = useState<ZennArticle[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const youtubeVideos = [
		{
			title:
				"審査員と受賞者が厳選！AIエージェントハッカソン作品から技術トレンドと未来を徹底解説【特別コラボ】",
			imageUrl: "https://img.youtube.com/vi/xngdRyNGc0E/0.jpg",
			link: "https://youtu.be/xngdRyNGc0E?si=LjA64YfSUDm6-tth",
			description: "",
			tags: [],
		},
		{
			title:
				"【文系派？理系派？】ChatGPT4.5とClaude3.7の実力検証！Claude Code活用術も大公開！",
			imageUrl: "https://img.youtube.com/vi/ejJNEvn-2EY/0.jpg",
			link: "https://youtu.be/ejJNEvn-2EY?si=zuyUyb5IA7G61ogz",
			description: "",
			tags: [],
		},
		{
			title:
				"【特別コラボ回】有名Tech YouTuber TECH WORLDの情報発信術とキャリアビジョンを深掘り！",
			imageUrl: "https://img.youtube.com/vi/VijY-rifZcI/0.jpg",
			link: "https://youtu.be/VijY-rifZcI?si=BigxzL2QgkLinBeP",
			description: "",
			tags: [],
		},
	];

	useEffect(() => {
		const fetchZennArticles = async () => {
			try {
				const rssUrl = "https://zenn.dev/coco9122/feed";
				const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

				const response = await fetch(proxyUrl);
				const data = await response.json();

				if (!data.contents) {
					throw new Error("Invalid data format");
				}

				const parser = new DOMParser();
				const xml = parser.parseFromString(data.contents, "text/xml");
				const items = xml.querySelectorAll("item");

				const parsedArticles = Array.from(items)
					.slice(0, 3)
					.map((item) => {
						const title = item.querySelector("title")?.textContent || "";
						const link = item.querySelector("link")?.textContent || "";
						const description =
							item.querySelector("description")?.textContent || "";
						const enclosure = item.querySelector("enclosure");
						const imageUrl = enclosure
							? enclosure.getAttribute("url") || "./images/placeholder.jpg"
							: "./images/placeholder.jpg";

						// Limit description length
						const shortDescription =
							description.length > 100
								? description.substring(0, 100) + "..."
								: description;

						return {
							title,
							link,
							description: shortDescription,
							imageUrl,
						};
					});

				setZennArticles(parsedArticles);
				setLoading(false);
			} catch (err) {
				console.error("Failed to fetch Zenn articles:", err);
				setError("記事を取得できませんでした。");
				setLoading(false);
			}
		};

		fetchZennArticles();
	}, []);

	return (
		<Box as="section" py={16} bg="gray.50" id="content-creation">
			<Container>
				<SectionHeading>技術コンテンツ制作</SectionHeading>

				<VStack spacing={10} align="stretch">
					<Box>
						<Heading as="h3" size="md" mb={6}>
							技術記事
						</Heading>

						{loading ? (
							<Box textAlign="center" py={10}>
								読み込み中...
							</Box>
						) : error ? (
							<Box textAlign="center" py={10}>
								{error}
							</Box>
						) : (
							<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
								{zennArticles.map((article, index) => (
									<ProjectCard
										key={index}
										title={article.title}
										description={article.description}
										imageUrl={article.imageUrl}
										link={article.link}
										tags={[]}
									/>
								))}
							</SimpleGrid>
						)}
					</Box>

					<Box>
						<Heading as="h3" size="md" mb={6}>
							私の編集しているYouTube動画
						</Heading>

						<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
							{youtubeVideos.map((video, index) => (
								<ProjectCard
									key={index}
									title={video.title}
									description={video.description}
									imageUrl={video.imageUrl}
									link={video.link}
									tags={video.tags}
								/>
							))}
						</SimpleGrid>
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};
