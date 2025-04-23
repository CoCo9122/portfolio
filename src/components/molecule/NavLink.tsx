import { Link, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
	children: React.ReactNode;
	href: string;
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
	return (
		<Link
			href={href}
			fontWeight="500"
			color="gray.800"
			_hover={{ color: "blue.600" }}
			transition="color 0.3s"
			{...props}
		>
			{children}
		</Link>
	);
};
