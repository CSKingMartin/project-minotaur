import Brand from '@molecules/Brand';
import Card from '@atoms/Card';
import Image from '@atoms/Image';
import Expandable from '@molecules/Expandable';
import Heading from '@atoms/Heading/';
import Nup from '@atoms/Nup';
import NavList from '@molecules/NavList';
import Wrapper from '@atoms/Wrapper';
import Dropdown from '@organisms/GlobalHeader/Dropdown.jsx';
import PanelMenu from '@organisms/GlobalHeader/PanelMenu.jsx';

export class GlobalHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};

		this.onHover = this.onHover.bind(this);
		this.onLeave = this.onLeave.bind(this);
	}

	onHover() {
		if (!this.state.isActive) {
			this.setState(state => ({
	      isActive: true
	    }));
		}
	};

	onLeave(e) {
		/* all elements that prevent nav closing onLeave have `data-hover` attribute */
		if ((e.relatedTarget.dataset && !e.relatedTarget.dataset.hover)) {
			this.setState(state => ({
	      isActive: false
	    }));
		}
	};

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
			<div data-hover="Root" className={stack} {...rest}>
				<Wrapper className="GlobalHeader__wrapper" size="default">
					<div className="GlobalHeader__bin" data-hover="Root">
					  <div className="GlobalHeader__logo" data-hover="Close">
					    <Brand variant="dark" />
					  </div>
					  <Dropdown href="/catalog" heading="Catalog">
					    <PanelMenu data-hover="catalogNavHover">
					      <PanelMenu.Sidebar>
					        <Heading level="h6">Pages</Heading>
					        <p>No pages :(</p>
					      </PanelMenu.Sidebar>
					      <PanelMenu.Main>
					        <NavList label="atoms" />
					        <NavList label="molecules" />
					        <NavList label="organisms" />
					      </PanelMenu.Main>
					    </PanelMenu>
					  </Dropdown>
					  <Dropdown href="/docs" heading="Docs">
					    <Card data-hover="docsNavHover">
					      Testing
					    </Card>
					  </Dropdown>
					</div>
				</Wrapper>
			</div>
		);
	}
};

export default GlobalHeader;
