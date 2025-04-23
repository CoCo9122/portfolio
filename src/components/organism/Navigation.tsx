import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { NavLink } from "../molecule/NavLink";
import { Container } from "../atom/Container";

export const Navigation = () => {
	const navItems = [
		{ href: "#about", text: "自己紹介" },
		{ href: "#skills", text: "技術スタック" },
		{ href: "#experience", text: "経験・実績" },
		{ href: "#achievements", text: "受賞歴・資格" },
		{ href: "#future", text: "今後の展望" },
		{ href: "#contact", text: "お問い合わせ" },
	];

	return (
		<Box
			as="nav"
			bg="white"
			boxShadow="sm"
			position="sticky"
			top={0}
			zIndex={100}
		>
			<Container>
				<Flex as={List} justify="center" py={4} flexWrap="wrap">
					{navItems.map((item) => (
						<ListItem
							key={item.href}
							mx={{ base: 2, md: 4 }}
							my={{ base: 2, md: 0 }}
						>
							<NavLink href={item.href}>{item.text}</NavLink>
						</ListItem>
					))}
				</Flex>
			</Container>
		</Box>
	);
};
