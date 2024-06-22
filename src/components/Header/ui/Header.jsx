import { Icon } from "@/ui/Icon";
import * as styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import slogan from "@/img/icons/logo/slogan.svg";
import logo from "@/img/icons/logo/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Icon Svg={slogan} clickable onClick={moveToMain} className={styles.logoSlogan} />
          <Icon Svg={logo} clickable onClick={moveToMain} className={styles.logoLogo} />
        </div>

        <div className={styles.headerContent}>
          <div>
            <img src="./img/header/burger-header.svg" alt="burger-heder" />
          </div>
          <div className={styles.headerContentDescription}>
            <h1 className={styles.headerTitle}>
              Только самые <span>сочные бургеры!</span>
            </h1>
            <p>
              Бесплатная доставка от <span>599₽</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
