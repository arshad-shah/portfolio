import { Box, Grid, Heading, Image, Tag, Text } from "@chakra-ui/react";
import MyPic from "../assets/myPic.png";
import Technologies from "../data/Technologies";

const AboutMe: React.FC = () => {
	return (
		<Box id="aboutme">
			<Heading display={"flex"} alignItems={"center"} justifyContent={"center"}>
				About Me
			</Heading>

			<Grid
				templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
				gap={6}
				py={8}
				mx={"auto"}
				maxW={"7xl"}
				justifyItems={"center"}
				alignItems={"center"}
			>
				<Box px={{ base: 2, md: 8 }}>
					<Text fontSize={"20px"}>
						My name is Arshad Shah, I am a software engineer from Ireland.
						<br />I have experience working with a variety of different
						technologies and across domains, including web development, mobile
						development, architecture, and cloud computing. My main focus is on
						building scalable, maintainable, and performant applications. I am
						also interested in DevOps and cloud computing.
					</Text>
					<Text py={2} fontSize={"20px"}>
						Here are some of the technologies I am working with:
					</Text>
					<Grid
						templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
						gap={2}
						mx={"auto"}
						maxW={"7xl"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						{Technologies.map((tech: string, index: number) => (
							<Tag
								key={index}
								size="lg"
								variant="solid"
								justifyContent={"center"}
							>
								{tech}
							</Tag>
						))}
					</Grid>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					boxSize={"sm"}
				>
					<Image
						src={MyPic}
						alt={"Arshad Shah"}
						width={300}
						height={300}
						borderRadius={"full"}
					/>
				</Box>
			</Grid>
		</Box>
	);
};

export default AboutMe;
