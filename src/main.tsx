import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeEditorProvider } from '@hypertheme-editor-pro/chakra-ui'
import App from "./App.tsx";
import "@fontsource/nunito-sans/400.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
		<ThemeEditorProvider>
			<App />
		</ThemeEditorProvider>
		</ChakraProvider>
	</React.StrictMode>,
);
