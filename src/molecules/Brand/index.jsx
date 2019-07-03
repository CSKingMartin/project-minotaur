import Heading from '@atoms/Heading';
import Image from '@atoms/Image';
import { Media, Media__body, Media__figure } from '@molecules/Media';
import Link from 'next/link';

export const Brand = (props) => {
  const {
    className,
    variant,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Brand',
    `Brand--${variant}`,
    className
  ]);

  return (
    <div className={stack} {...rest}>
      <Link href="/">
        {/* eslint-disable */}
        <a className="Brand__wrapper">
          <Media align="center">
            <Media__body>
              <Heading className="Brand__script" level="h3">Minotaur</Heading>
            </Media__body>
            <Media__figure>
              <Image className="Brand__logo" src="/static/images/minotaur-color.png" alt="Project Minotaur logo" />
            </Media__figure>
          </Media>
        </a>
      {/* eslint-enable */}
      </Link>
    </div>
  );
};

Brand.defaultProps = {
  variant: 'default'
};

Brand.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'dark']),
  children: PropTypes.node
};

export default Brand;
