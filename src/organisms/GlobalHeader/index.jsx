import Brand from '@molecules/Brand';
import Image from '@atoms/Image';
import Wrapper from '@atoms/Wrapper';

export const GlobalHeader = (props) => {
	const {
		className,
		children,
		...rest
	}	= props;

	const stack = utilities.createClassStack([
		'GlobalHeader',
		className
	]);

	return (
		<div className={stack}>
			<Wrapper className="GlobalHeader__wrapper" size="default">
				<div className="GlobalHeader__logo">
					<Brand variant="dark" />
				</div>
				<div className="GlobalHeader__nav-item">Catalog</div>
				<div className="GlobalHeader__nav-item">Docs</div>
				<div className="GlobalHeader__github">
					<Image src="/static/images/github.svg" />
				</div>
			</Wrapper>
		</div>
	);
};

GlobalHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default GlobalHeader;
