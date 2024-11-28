import classNames from 'classnames';
import './avatar.scss';

const Avatar = ({
  name,
  className,
  width,
  height,
  font,
  color,
  fontWeight,
}) => {
  return (
    <span className={classNames(className, 'flex')}>
      <div>
        <span
          className="avatar__placeholder"
          style={{
            width: width,
            height: height,
            fontSize: font,
            color: color,
            fontWeight: fontWeight,
          }}
        >
          {name?.split(' ')[0]?.charAt(0)?.toUpperCase()}
          {name?.split(' ')[1]?.charAt(0)?.toUpperCase()}
        </span>
      </div>
    </span>
  );
};

export default Avatar;
