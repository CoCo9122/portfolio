import { useState } from "react";

import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { P5ToggleButton } from "../atom/P5ToggleButton";
import SampleSketch from "../atom/SampleSketch";
import { Footer } from "../organism/Footer";
import { Header } from "../organism/Header";
import { Navigation } from "../organism/Navigation";

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	const [isp5Show, setIsP5Show] = useState(false);

	return (
		<Box
			position="relative"
			width="100%"
			minH="100vh"
			bg="dark.900"
			overflow="hidden"
		>
			{/* Background p5.js sketch */}
			{isp5Show && (
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
			)}

			{/* Main content */}
			<Box position="relative" zIndex={1}>
				<Header />
				<Navigation />
				<Box as="main">{children}</Box>
				<Footer />
			</Box>

			{/* P5 Toggle Button */}
			<P5ToggleButton
				isShow={isp5Show}
				onToggle={() => setIsP5Show(!isp5Show)}
			/>
		</Box>
	);
};
