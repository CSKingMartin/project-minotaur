import Wrapper from '@atoms/Wrapper';

const Editors = ({ children }) => (
  React.Children.toArray(children).filter((a) => a).length > 0
    ? <Wrapper className="Editors">{children}</Wrapper>
    : <div />
);

Editors.propTypes = {
  children: PropTypes.any
};

export default Editors;
