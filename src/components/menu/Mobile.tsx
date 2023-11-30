import {
	Link,
	MenuItem,
	MenuList,
	Menu,
	MenuButton,
	IconButton,
	useColorModeValue,
	Icon,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import ResumePdf from "../../assets/ArshadResume.pdf";

interface MobileMenuProps {
	Links: string[];
}

export default function MobileMenu({ Links }: MobileMenuProps) {
	const newLinks = [...Links, "Resume"];
	const iconBackgroundColour = useColorModeValue("gray.100", "gray.700");
	const linkHoverColor = useColorModeValue("gray.200", "gray.700");
	return (
		<Menu autoSelect={false} closeOnSelect isLazy>
			{({ isOpen }) => (
				<>
					<MenuButton
						_active={{
							bg: iconBackgroundColour,
						}}
						as={IconButton}
						size={"lg"}
						fontSize={"24px"}
						aria-label={isOpen ? "Close Menu" : "Open Menu"}
						icon={isOpen ? <Icon as={FiX} /> : <Icon as={FiMenu} />}
					/>
					<MenuList>
						{newLinks.map((link, index) => (
							<MenuItem
								fontSize={"20px"}
								key={link}
								mb={index === newLinks.length - 1 ? 0 : 3}
								p={0}
								onClick={() => {
									if (link === "Resume") {
										window.open(ResumePdf);
									}
								}}
							>
								<Link
									padding={2}
									textAlign={"center"}
									width={"100%"}
									rounded={"md"}
									href={`#${link.toLowerCase().replace(" ", "")}`}
									_hover={{
										textDecoration: "none",
										bg: linkHoverColor,
										fontWeight: "bold",
									}}
								>
									{link}
								</Link>
							</MenuItem>
						))}
					</MenuList>
				</>
			)}
		</Menu>
	);
}
