import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, Tooltip } from "@chakra-ui/react";

interface P5ToggleButtonProps {
	isShow: boolean;
	onToggle: () => void;
}

export const P5ToggleButton = ({ isShow, onToggle }: P5ToggleButtonProps) => {
	return (
		<Tooltip
			label={isShow ? "アニメーションを非表示" : "アニメーションを表示"}
			placement="left"
			hasArrow
		>
			<IconButton
				aria-label={isShow ? "アニメーションを非表示" : "アニメーションを表示"}
				icon={isShow ? <ViewIcon /> : <ViewOffIcon />}
				onClick={onToggle}
				position="fixed"
				bottom="30px"
				right="30px"
				zIndex={100}
				size="lg"
				borderRadius="full"
				bg={isShow ? "brand.500" : "gray.600"}
				color="white"
				_hover={{
					bg: isShow ? "brand.600" : "gray.500",
					transform: "scale(1.1)",
				}}
				_active={{
					transform: "scale(0.95)",
				}}
				transition="all 0.3s ease"
				boxShadow="lg"
			/>
		</Tooltip>
	);
};
