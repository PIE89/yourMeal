import { AppLink } from "@/ui/AppLink";
import * as style from "./NavigationItems.module.css";
import { Icon } from "@/ui/Icon";

const NavigationItems = ({ item }) => {
  return (
    <li>
      <AppLink
        className={style.mealListButton}
        activeClassName={style.mealListButtonActive}
        to={item.path}
      >
        <Icon Svg={item.Icon} />
        <p>{item.name}</p>
      </AppLink>
    </li>
  );
};

export { NavigationItems };
