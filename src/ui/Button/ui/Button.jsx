import classNames from "classnames";
import cls from "./Button.module.css";

const typeClasses = {
  orange: "orange",
  neutral: "neutral",
  none: "none",
};

const Button = (props) => {
  const { children, className = "", type, active, border, onClick } = props;

  const typeClass = typeClasses[type] || typeClasses.none;

  return (
    <button
      className={classNames(`button ${className}`, cls[typeClass], {
        [cls["active"]]: active,
        [cls["border"]]: border,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
