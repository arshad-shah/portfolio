import { Box, Grid, Heading } from "@chakra-ui/react";
import Projects from "../data/Projects";
import Project from "./Project";

const ProjectsList = () => {
	return (
		<Box id="projects" my={16}>
			<Heading display={"flex"} alignItems={"center"} justifyContent={"center"}>
				Projects
			</Heading>
			<Grid
				templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
				gap={6}
				py={8}
				mx={"auto"}
				maxW={"7xl"}
				justifyItems={"center"}
				alignItems={"center"}
			>
				{Projects.map((project, index) => (
					<Project
						key={index}
						heading={project.heading}
						description={project.description}
						languages={project.languages}
						linkAriaLabel={project.linkAriaLabel}
						shopLink={project.shopLink}
						repoLink={project.repoLink}
						siteLink={project.siteLink}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default ProjectsList;
