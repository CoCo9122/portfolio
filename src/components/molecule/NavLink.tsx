import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface NavLinkProps {
	children: React.ReactNode;
	href: string;
}

const MotionAnchor = motion(chakra.a);

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
	return (
		<MotionAnchor
			href={href}
			fontWeight="500"
			color="gray.300"
			fontSize="sm"
			px={4}
			py={2}
			borderRadius="md"
			position="relative"
			textDecoration="none"
			css={{
				transition: "all 0.3s ease",
				"&::before": {
					content: "''",
					position: "absolute",
					bottom: "0",
					left: "50%",
					width: "0",
					height: "2px",
					background: "#38b2ac",
					transition: "all 0.3s ease",
					transform: "translateX(-50%)",
				},
				"&:hover::before": {
					width: "100%",
				},
			}}
			_hover={{
				color: "brand.400",
				textShadow: "0 0 10px rgba(56, 178, 172, 0.6)",
				textDecoration: "none",
			}}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			{...props}
		>
			{children}
		</MotionAnchor>
	);
};
