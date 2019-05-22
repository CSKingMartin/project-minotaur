import Heading from '@atoms/Heading';
import HorizontalRule from '@atoms/HorizontalRule';
import NavList from '@molecules/NavList';
import Nup from '@atoms/Nup';
import Rhythm from '@atoms/Rhythm';
import Wrapper from '@atoms/Wrapper';

export const GlobalFooter = (props) => {
	const {
		className,
		children,
		...rest
	} = props;

	const stack = utilities.createClassStack([
		'GlobalFooter',
		className
	]);

	return (
		<div className={stack} {...rest}>
			<Wrapper size="wide">
				<Rhythm>
					<Heading level="h3">Project Minotaur</Heading>
					<HorizontalRule />
					<Nup className="GlobalFooter__nup" variant="three">
						<NavList label="atoms" />
						<NavList label="molecules" />
						<NavList label="organisms" />
					</Nup>
				</Rhythm>
			</Wrapper>
		</div>
	);
};

export default GlobalFooter;
