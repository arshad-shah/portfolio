import {
	Box,
	Heading,
	Container,
	Text,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

export default function Hero() {
	return (
		<Box
			display={"flex"}
			minH={"100vh"}
			width={"full"}
			flexDir={"column"}
			justifyContent={"center"}
			paddingBottom={{ base: "16vh", md: 0 }}
		>
			<Container maxW="3xl">
				<Stack
					as={Box}
					textAlign={"center"}
					placeContent={"center"}
					placeItems={"center"}
					spacing={{ base: 6, md: 8 }}
					py={{ base: 20, md: 36 }}
				>
					<Box>
						<Heading
							fontWeight={500}
							lineHeight={"110%"}
							fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
						>
							Hello, my name is <br />
						</Heading>
						<Text
							as={"span"}
							color={"green.400"}
							fontWeight={600}
							fontSize={{ base: "5xl", sm: "5xl", md: "7xl" }}
							textDecoration={"underline"}
						>
							Arshad!
						</Text>
					</Box>
					<Text
						color={useColorModeValue("gray.600", "gray.200")}
						fontSize={"20px"}
					>
						Associate Software Engineer
					</Text>
					<SocialLinks />
				</Stack>
			</Container>
		</Box>
	);
}
