import Link from 'next/link';

const PageLink = (props) => {
	const {
    className,
		label,
		href
	} = props;

  const stack = utilities.createClassStack([
    'PageLink',
    className
  ]);

	return (
		<span className={stack}><Link href={href}><a>{label}</a></Link></span>
	);
};

export default PageLink;
