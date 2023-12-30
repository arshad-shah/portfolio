import {
	Button,
	Flex,
	HStack,
	Icon,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import ResumePdf from "../../assets/ArshadResume.pdf";

interface DesktopMenuProps {
	Links: string[];
}

export default function DesktopMenu({ Links }: DesktopMenuProps) {
	const linkHoverColor = useColorModeValue("gray.200", "gray.700");
	return (
		<Flex h={16} alignItems={"center"}>
			<HStack spacing={8} justify="space-between">
				<HStack as={"nav"} spacing={2} display={{ base: "none", md: "flex" }}>
					{Links.map((link) => (
						<Button
							variant={"ghost"}
							size={"lg"}
							width={"inherit"}
							fontSize={"20px"}
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								fontWeight: "bold",
								bg: linkHoverColor,
							}}
							as={Link}
							href={`#${link.toLowerCase().replace(" ", "")}`}
						>
							{link}
						</Button>
					))}
					<Button
						rightIcon={<Icon as={FaDownload} fontSize={24} />}
						size={"lg"}
						as={Link}
						fontSize={"20px"}
						rounded={"md"}
						onClick={() => {
							window.open(ResumePdf);
						}}
						_hover={{
							textDecoration: "none",
							fontWeight: "bold",
							bg: linkHoverColor,
						}}
					>
						Resume
					</Button>
				</HStack>
			</HStack>
		</Flex>
	);
}
