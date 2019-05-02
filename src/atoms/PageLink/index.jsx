import Link from 'next/link';

const PageLink = (props) => {
	const {
		label,
		href
	} = props;

	return (
		<Link href={href}><a>{label}</a></Link>
	);
};

export default PageLink;
