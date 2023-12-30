import { useEffect, useState } from "react";
import { Link, IconButton, Icon, useColorModeValue } from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";

export default function BackTtButton() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{scrollPosition > 300 && (
				<Link href="/#top">
					<IconButton
						size={"lg"}
						fontSize={"32px"}
						aria-label={"Back to Top"}
						position="fixed"
						bottom="90px"
						right={["15px"]}
						zIndex={1}
						alignItems={"center"}
					>
						<Icon as={FiArrowUp} />
					</IconButton>
				</Link>
			)}
		</>
	);
}
