import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiJquery,
	SiKotlin,
	SiMaterialdesign,
	SiNextdotjs,
	SiReact,
	SiRedux,
	SiSqlite,
	SiStyledcomponents,
	SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IconType } from "react-icons";

const getIcon = (language: string): IconType | undefined => {
	switch (language) {
		case "Kotlin":
			return SiKotlin;
		case "React Native":
		case "ReactJS":
			return SiReact;
		case "Redux toolkit":
			return SiRedux;
		case "Tailwind CSS":
			return SiTailwindcss;
		case "NextJS":
			return SiNextdotjs;
		case "Material UI":
			return SiMaterialdesign;
		case "Styled components":
			return SiStyledcomponents;
		case "HTML":
			return SiHtml5;
		case "CSS":
			return SiCss3;
		case "Javascript":
			return SiJavascript;
		case "JQuery":
			return SiJquery;
		case "Java":
			return FaJava;
		case "SQLite":
			return SiSqlite;
		default:
			return;
	}
};

export default getIcon;
