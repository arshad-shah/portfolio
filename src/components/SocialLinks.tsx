import { FaHackerrank } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IconButton, Stack, useColorModeValue } from "@chakra-ui/react";

interface SocialButtonProps {
	children: React.ReactNode;
	label: string;
	href: string;
}

const SocialButton = ({ children, label, href }: SocialButtonProps) => {
	return (
		<IconButton
			bg={useColorModeValue("blackAlpha.300", "whiteAlpha.300")}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			aria-label={label}
			size={"lg"}
			fontSize={"24px"}
			_hover={{
				bg: useColorModeValue("blackAlpha.600", "whiteAlpha.700"),
				color: useColorModeValue("whiteAlpha.900", "blackAlpha.900"),
			}}
		>
			{children}
		</IconButton>
	);
};

export default function SocialLinks() {
	return (
		<Stack justifyContent="center" direction={"row"} spacing={6}>
			<SocialButton
				label={"LinkedIn"}
				href={"https://www.linkedin.com/in/arshadshah"}
			>
				<FiLinkedin />
			</SocialButton>
			<SocialButton label={"Github"} href={"https://github.com/arshad-shah"}>
				<FiGithub />
			</SocialButton>
			<SocialButton
				label={"Hacker Rank"}
				href={"https://www.hackerrank.com/shaharshad57"}
			>
				<FaHackerrank />
			</SocialButton>
			<SocialButton label={"Email Me"} href={"mailto:arshad@arshadshah.com"}>
				<FiMail />
			</SocialButton>
		</Stack>
	);
}
