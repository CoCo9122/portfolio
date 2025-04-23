import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HomePage } from "./components/page/HomePage";

// Extending the theme to customize it according to our portfolio design
const theme = extendTheme({
	colors: {
		blue: {
			500: "#3b82f6", // accent
			600: "#2563eb", // primary
			700: "#1d4ed8", // hover
		},
		gray: {
			50: "#f9fafb",
			500: "#4b5563", // secondary
			800: "#1f2937", // dark
		},
	},
	fonts: {
		heading: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
		body: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
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
