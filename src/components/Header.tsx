import {
	Box,
	Flex,
	useColorModeValue,
	IconButton,
	Icon,
	useColorMode,
	useBreakpointValue,
} from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import DesktopMenu from "./menu/Desktop";
import MobileMenu from "./menu/Mobile";

export default function Header() {
	const isMobile = useBreakpointValue({ base: true, md: false });

	const Links = ["About me", "Projects"];

	const { colorMode, toggleColorMode } = useColorMode();
	const colorModeAriaLabel =
		colorMode === "light" ? "Toggle Light mode" : "Toggle Dark Mode";

	return (
		<>
			<Box
				bg={useColorModeValue("gray.300", "gray.900")}
				px={4}
				zIndex={11}
				position={"fixed"}
				width={"100%"}
			>
				<Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
					<Box display={"flex"} flexDir={"row"} alignItems={"center"}>
						{isMobile ? (
							<MobileMenu Links={Links} />
						) : (
							<DesktopMenu Links={Links} />
						)}
						<IconButton
							marginLeft={3}
							onClick={toggleColorMode}
							aria-label={colorModeAriaLabel}
							size={"lg"}
							fontSize={"24px"}
						>
							{colorMode === "light" ? (
								<Icon as={FiMoon} />
							) : (
								<Icon as={FiSun} />
							)}
						</IconButton>
					</Box>
				</Flex>
			</Box>
		</>
	);
}
