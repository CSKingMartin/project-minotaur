import Brand from '@molecules/Brand';
import Card from '@atoms/Card';
import Image from '@atoms/Image';
import Expandable from '@molecules/Expandable';
import Heading from '@atoms/Heading/';
import Nup from '@atoms/Nup';
import NavList from '@molecules/NavList';
import Wrapper from '@atoms/Wrapper';

export class GlobalHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};

		this.rootRef = React.createRef();
		this.primaryRef = React.createRef();
		this.panelRef = React.createRef();

		this.onHover = this.onHover.bind(this);
	}

	onHover() {
		this.setState(state => ({
      isActive: !state.isActive
    }));
	};

	onLeave(e) {
		console.log('target:', e.relatedTarget);
		console.log('ref', this.rootRef.current);

		if (e.relatedTarget !== (this.rootRef.current || this.primaryRef.current || this.panelRef.current)) {
			this.onHover();
		}
	}

	render() {
		const {
			className,
			...rest
		} = this.props;

		const stack = utilities.createClassStack([
			'GlobalHeader',
			className
		]);

		return (
			<div ref={this.rootRef} className={stack} {...rest}>
				<Wrapper className="GlobalHeader__wrapper" size="default">
					<div className="GlobalHeader__primary" ref={this.primaryRef}>
						<div className="GlobalHeader__logo">
							<Brand variant="dark" />
						</div>
						<div
							className={`GlobalHeader__nav-item ${this.state.isActive ? 'is-active' : ''}`}
							onMouseEnter={this.onHover}
							onMouseLeave={(e) => this.onLeave(e)}
						>
							<div className="GlobalHeader__nav-heading">Catalog</div>
						</div>
						<div className="GlobalHeader__nav-item">
							<div className="GlobalHeader__nav-heading">Docs</div>
						</div>
						<div className="GlobalHeader__github">
							<Image src="/static/images/github.svg" />
						</div>
					</div>
					<Expandable
						className="GlobalHeader__catalog-panel"
					  toggleElement="none"
					  closeHeight="0"
					  forceExpand={this.state.isActive}
					>
					  <Card
					  	className="GlobalHeader__catalog-inner"
					  	onMouseLeave={this.onHover}
					  >
					  	<div className="GlobalHeader__catalog-side">
					  		<Heading level="h6">Minotaur</Heading>
					  		<p>Eventually other links can live here.</p>
					  		<p>Links such as Typography, colors, and fonts</p>
					  	</div>
					  	<Nup className="GlobalHeader__catalog-main" variant="three">
						  	<NavList label="atoms" />
								<NavList label="molecules" />
								<NavList label="organisms" />
							</Nup>
					  </Card>
					</Expandable>
				</Wrapper>
			</div>
		);
	}
};

export default GlobalHeader;
