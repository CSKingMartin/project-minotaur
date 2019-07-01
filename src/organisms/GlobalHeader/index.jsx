import Brand from '@molecules/Brand';
import Heading from '@atoms/Heading/';
import Icon from '@atoms/Icon';
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
    /* eslint-disable */
    if (!this.state.isActive) {
      this.setState(state => ({
        isActive: true
      }));
    }
  }

  onLeave(e) {
    /* all elements that prevent nav closing onLeave have `data-hover` attribute */
    if ((e.relatedTarget.dataset && !e.relatedTarget.dataset.hover)) {
      this.setState(state => ({
        isActive: false
      }));
    }
    /* eslint-enable */
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
      <div className={stack} {...rest}>
        <Wrapper className="GlobalHeader__wrapper" size="default">
          <div className="GlobalHeader__bin" data-hover="Root">
            <div className="GlobalHeader__logo" data-hover="Close">
              <Brand variant="dark" />
            </div>
            <Dropdown href="/catalog" heading="Catalog" alt="A link to the Catalog root">
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
            <Dropdown href="/docs" heading="Docs" alt="A link to the Documentation root">
              <PanelMenu data-hover="docsNavHover">
                Testing
              </PanelMenu>
            </Dropdown>
            <div className="GlobalHeader__github">
              <a href="https://www.github.com/CSKingMartin/project-minotaur" alt="Link to Github repository homepage">
                <Icon name="github" />
              </a>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

GlobalHeader.propTypes = {
  className: PropTypes.string
};

export default GlobalHeader;
