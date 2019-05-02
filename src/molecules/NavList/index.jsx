import Heading from '@atoms/Heading';
import Rhythm from '@atoms/Rhythm';
import PageLink from '@atoms/PageLink';
import { atomsIndexData } from './getContext';

const NavList = (props) => {
	const {
		label,
		children
	} = props;

	return (
		<div className="NavList">
			<Rhythm>
				<Heading level="h6">{label}</Heading>
				<div>
					{atomsIndexData.map((path, url, index) => (
						<PageLink key="index" label={path} href={url} />
					))}
				</div>
			</Rhythm>
		</div>
	);
};

export default NavList;
