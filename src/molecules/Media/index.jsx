export const Media = (props) => {
	const {
		className,
		align,
		variant,
		children,
		...rest
	}	= props;

	const stack = utilities.createClassStack([
		'Media',
		`Media--align-${align}`,
		`Media--${variant}`,
		className
	]);

	return (
		<div className={stack} {...rest}>
			{children}
		</div>
	);
};

export const Media__body = (props) => {
	const {
		className,
		children,
		...rest
	} = props;

	const stack = utilities.createClassStack([
		'Media__body',
		className
	]);

	return (
		<div className={stack} {...rest}>
			{children}
		</div>
	);
};

export const Media__figure = (props) => {
	const {
		className,
		children,
		...rest
	} = props;

	const stack = utilities.createClassStack([
		'Media__figure',
		className
	]);

	return (
		<div className={stack} {...rest}>
			{children}
		</div>
	);
};

Media.defaultProps = {
	align: 'center',
	variant: 'default'
};

Media.propTypes = {
	className: PropTypes.string,
	align: PropTypes.oneOf(['top', 'center', 'bottom']),
	variant: PropTypes.oneOf(['default', 'full']),
	children: PropTypes.node
};

export default Media;
