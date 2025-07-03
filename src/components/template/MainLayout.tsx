import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import SampleSketch from "../atom/SampleSketch";
import { Footer } from "../organism/Footer";
import { Header } from "../organism/Header";
import { Navigation } from "../organism/Navigation";

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<Box
			position="relative"
			width="100%"
			minH="100vh"
			bg="dark.900"
			overflow="hidden"
		>
			{/* Background p5.js sketch */}
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				zIndex="0"
			>
				<SampleSketch />
			</Box>

			{/* Main content */}
			<Box position="relative" zIndex={1}>
				<Header />
				<Navigation />
				<Box as="main">{children}</Box>
				<Footer />
			</Box>
		</Box>
	);
};
