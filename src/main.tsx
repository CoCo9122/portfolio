import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Google Analytics setup
const addGoogleAnalytics = () => {
	// Create script elements for Google Analytics
	const gtagScript = document.createElement("script");
	gtagScript.async = true;
	gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-JY7LQ9ZRG6";

	const inlineScript = document.createElement("script");
	inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JY7LQ9ZRG6');
  `;

	// Append to document head
	document.head.appendChild(gtagScript);
	document.head.appendChild(inlineScript);
};

// Add Google Analytics if not in development mode
if (import.meta.env.PROD) {
	addGoogleAnalytics();
}

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
