import { Icon } from "@/ui/Icon";
import cls from "./NotFound.module.css";
import slogan from "@/img/icons/logo/slogan.svg";
import logo from "@/img/icons/logo/logo.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/");
  };
  return (
    <div className={cls.body}>
      <Icon
        Svg={slogan}
        clickable
        onClick={moveToMain}
        className={cls.logoSlogan}
      />

      <div title="404" className={cls.item}>
        404
      </div>
      <Icon
        Svg={logo}
        clickable
        onClick={moveToMain}
        className={cls.logoLogo}
      />
    </div>
  );
};

export default NotFound;
