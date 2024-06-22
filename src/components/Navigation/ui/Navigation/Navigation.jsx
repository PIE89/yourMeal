import { useNavbarItemsList } from "@/utils/useNavbarItemsList";
import * as style from "./Navigation.module.css";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { useMemo } from "react";

const Navigation = () => {
  let navbarItems = useNavbarItemsList();

  const items = useMemo(() => {
    return navbarItems.map((item) => (
      <NavigationItems key={item.path} item={item} />
    ));
  }, [navbarItems]);

  return (
    <nav className={style.navigation}>
      <ul className={style.mealList}>{items}</ul>
    </nav>
  );
};

export { Navigation };
