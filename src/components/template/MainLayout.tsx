import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Header } from "../organism/Header";
import { Navigation } from "../organism/Navigation";
import { Footer } from "../organism/Footer";
import SampleSketch from "../atom/SampleSketch";

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div style={{ position: "relative", width: "100%", height: "100vh" }}>
			<motion.div
				initial={{ backgroundColor: "rgba(32, 32, 32, 1)" }}
				animate={{ backgroundColor: "rgba(32, 32, 32, 0)" }}
				transition={{ duration: 5, ease: "easeInOut" }}
				style={{
					width: "100%",
					height: "100%",
				}}
			>
				<SampleSketch />
				<Box style={{ position: "relative", zIndex: 1 }}>
					<Header />
					<Navigation />
					<Box as="main">{children}</Box>
					<Footer />
				</Box>
			</motion.div>
		</div>
	);
};
