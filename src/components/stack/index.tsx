import styles from "./index.module.css";

interface StackProps {
	alignItems?: string;
	justifyContent?: string;
	gap?: string;
	flexWrap?: string;
	flexDirection?: string;
	children: any;
}

const Stack = ({
	children,
	alignItems,
	justifyContent,
	gap,
	flexWrap,
	flexDirection,
}: StackProps) => {
	const StackStyles = {
		alignItems: alignItems,
		justifyContent: justifyContent,
		gap: gap,
		flexWrap: flexWrap,
		flexDirection: flexDirection,
	};
	return <div className={`${styles.stack} ${StackStyles}`}>{children}</div>;
};

export default Stack;
