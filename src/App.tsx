import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HomePage } from "./components/page/HomePage";

// Modern Tech Portfolio Theme with dark mode and futuristic design
const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	colors: {
		brand: {
			50: "#e6fffa",
			100: "#b2f5ea",
			200: "#81e6d9",
			300: "#4fd1c7",
			400: "#38b2ac",
			500: "#319795", // Primary cyan
			600: "#2c7a7b",
			700: "#285e61",
			800: "#234e52",
			900: "#1d4044",
		},
		purple: {
			400: "#9f7aea",
			500: "#805ad5",
			600: "#6b46c1",
		},
		cyan: {
			400: "#00d4ff",
			500: "#00bcd4",
			600: "#0097a7",
		},
		dark: {
			50: "#f7fafc",
			100: "#edf2f7",
			200: "#e2e8f0",
			300: "#cbd5e0",
			400: "#a0aec0",
			500: "#718096",
			600: "#4a5568",
			700: "#2d3748",
			800: "#1a202c",
			900: "#171923",
		},
	},
	fonts: {
		heading: `'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`,
		body: `'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif`,
	},
	styles: {
		global: (props: { colorMode: string }) => ({
			body: {
				bg: props.colorMode === "dark" ? "dark.900" : "white",
				color: props.colorMode === "dark" ? "white" : "dark.900",
			},
		}),
	},
	components: {
		Button: {
			variants: {
				gradient: {
					background: "linear-gradient(45deg, #805ad5, #00d4ff)",
					color: "white",
					_hover: {
						background: "linear-gradient(45deg, #6b46c1, #0097a7)",
						transform: "translateY(-2px)",
						boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)",
					},
					transition: "all 0.3s ease",
				},
				ghost: {
					color: "brand.400",
					_hover: {
						bg: "rgba(56, 178, 172, 0.1)",
						color: "brand.300",
					},
				},
			},
		},
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			<HomePage />
		</ChakraProvider>
	);
}

export default App;
