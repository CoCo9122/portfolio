import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Container } from "../atom/Container";
import { NavLink } from "../molecule/NavLink";

const MotionBox = motion(Box);

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
		<MotionBox
			as="nav"
			bg="rgba(15, 15, 35, 0.95)"
			backdropFilter="blur(20px)"
			borderBottom="1px solid"
			borderColor="brand.400"
			position="sticky"
			top={0}
			zIndex={100}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, delay: 0.5 }}
		>
			<Container>
				<Flex as={List} justify="center" py={4} flexWrap="wrap">
					{navItems.map((item, index) => (
						<motion.div
							key={item.href}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
						>
							<ListItem mx={{ base: 2, md: 4 }} my={{ base: 2, md: 0 }}>
								<NavLink href={item.href}>{item.text}</NavLink>
							</ListItem>
						</motion.div>
					))}
				</Flex>
			</Container>
		</MotionBox>
	);
};
