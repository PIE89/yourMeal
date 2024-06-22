import { Icon } from "@/ui/Icon";
import slogan from "@/img/icons/logo/slogan.svg";
import logo from "@/img/icons/logo/logo.svg";
import telephone from "@/img/icons/telephone.svg";
import tg from "@/img/icons/socials/tg.svg";
import vk from "@/img/icons/socials/vk.svg";
import * as stylesFooter from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/");
  };

  const handleClickSocial = (link) => {
    window.open(link);
  };

  return (
    <footer className={stylesFooter.footer}>
      <div className={stylesFooter.container}>
        <div className={stylesFooter.footerRow}>
          <div className={stylesFooter.footerCopyright}>
            <div className={stylesFooter.footerLogo}>
              <Icon
                Svg={slogan}
                clickable
                onClick={moveToMain}
                className={stylesFooter.logoSlogan}
              />
              <Icon
                Svg={logo}
                clickable
                onClick={moveToMain}
                className={stylesFooter.logoLogo}
              />
            </div>
            <p>© YouMeal, 2024</p>
          </div>

          <div className={stylesFooter.footerWidgetsWrapper}>
            <div className={stylesFooter.footerWidgetOrder}>
              <h6>Номер для заказа</h6>
              <div className={stylesFooter.footerWidgetPhone}>
                <Icon Svg={telephone} /> <span>Телефона нету &#128513;</span>
              </div>
            </div>
            <div className={stylesFooter.footerWidgetSocial}>
              <h6>Мы в соцсетях</h6>
              <div className={stylesFooter.socialLinks}>
                <Icon
                  Svg={tg}
                  className={stylesFooter.TG}
                  clickable
                  onClick={() => {
                    handleClickSocial("https://telegram.me/van_ka88");
                  }}
                />
                <Icon
                  Svg={vk}
                  className={stylesFooter.VK}
                  clickable
                  onClick={() => {
                    handleClickSocial("https://vk.com/van_ka1");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
