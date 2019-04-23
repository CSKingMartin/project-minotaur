export const MinotaurPageShell = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <div className="MinotaurPageShell">
    	{children}
    </div>
  );
};

export const MinotaurPageShell__main = (props) => {
	const { children } = props;

	return (
		<main id="main" className="MinotaurPageShell__main">
			{children}
		</main>
	);
};

export const MinotaurPageShell__header = (props) => {
	const { children } = props;

	return (
		<header className="MinotaurPageShell__header">
			{children}
		</header>
	);
};

export const MinotaurPageShell__footer = (props) => {
	const { children } = props;

	return (
		<footer className="MinotaurPageShell__footer">
			{children}
		</footer>
	);
};

/* PROPTYPES */

MinotaurPageShell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

// MinotaurPageShell__header,
// MinotaurPageShell__footer,
// MinotaurPageShell__main = {
// 	children: PropTypes.node
// }

export default MinotaurPageShell;
