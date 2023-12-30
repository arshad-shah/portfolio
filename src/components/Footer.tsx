import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const creatorName = "Arshad Shah";

	return (
		<Box
			p={4}
			textAlign="center"
			mt={8}
		>
			<Text fontSize="lg" mb={4}>
				&copy; {currentYear} {creatorName}
			</Text>
			<SocialLinks />
		</Box>
	);
};

export default Footer;
