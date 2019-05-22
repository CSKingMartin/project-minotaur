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
				<Image className="GlobalHeader__logo" src="/static/images/minotaur-color.png" />
			</Wrapper>
		</div>
	);
};

GlobalHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default GlobalHeader;
