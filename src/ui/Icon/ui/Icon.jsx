const Icon = (props) => {
  const { Svg, clickable, onClick, className = "" } = props;

  const icon = <Svg className={`icon ${className}`} onClick={undefined} />;

  if (clickable) {
    return (
      <button onClick={onClick} type="button" className={`icon ${className}`}>
        {icon}
      </button>
    );
  }

  return icon;
};

export { Icon };
