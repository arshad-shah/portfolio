import {
	Box,
	Heading,
	Text,
	Card,
	CardBody,
	CardFooter,
	Stack,
	Divider,
	ButtonGroup,
	Tag,
	TagLeftIcon,
	IconButton,
} from "@chakra-ui/react";
import getIcon from "../utils/LanguageSelector";
import { FaGithub } from "react-icons/fa6";
import { SiGoogleplay } from "react-icons/si";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface Project {
	heading: string;
	description: string;
	languages: string[];
	linkAriaLabel: string;
	shopLink: string | undefined;
	repoLink: string;
	siteLink: string | undefined;
}

const Project: React.FC<Project> = ({
	heading,
	description,
	languages,
	linkAriaLabel,
	shopLink,
	repoLink,
	siteLink,
}) => {
	return (
		<Card maxW="sm">
			<CardBody>
				{/* <Image
					src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/> */}
				<Stack mt="6" spacing="3">
					<Heading size="md">{heading}</Heading>
					<Text>{description}</Text>
					<Box>
						{languages.map((language, index) => (
							<Tag key={index} size="lg" variant="solid" m={1}>
								<TagLeftIcon boxSize="16px" as={getIcon(language)} />
								{language}
							</Tag>
						))}
					</Box>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2">
					{shopLink && (
						<IconButton
							size={"lg"}
							fontSize={"24px"}
							aria-label={linkAriaLabel}
							icon={<SiGoogleplay />}
							onClick={() => window.open(shopLink, "_blank")}
						/>
					)}
					{siteLink && (
						<IconButton
							size={"lg"}
							fontSize={"24px"}
							aria-label="Site"
							icon={<FaExternalLinkSquareAlt />}
							onClick={() => window.open(siteLink, "_blank")}
						/>
					)}
					{repoLink && (
						<IconButton
							size={"lg"}
							fontSize={"24px"}
							aria-label={linkAriaLabel}
							icon={<FaGithub />}
							onClick={() => window.open(repoLink, "_blank")}
						/>
					)}
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default Project;
