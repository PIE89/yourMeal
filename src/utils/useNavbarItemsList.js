import burger from "@/img/icons/menu/burger.svg";
import snacks from "@/img/icons/menu/snacks.svg";
import hotDog from "@/img/icons/menu/hot-dog.svg";
import combo from "@/img/icons/menu/combo.svg";
import kebab from "@/img/icons/menu/kebab.svg";
import pizza from "@/img/icons/menu/pizza.svg";
import wok from "@/img/icons/menu/wok.svg";
import dessert from "@/img/icons/menu/dessert.svg";
import sauce from "@/img/icons/menu/sauce.svg";

const useNavbarItemsList = () => {
  const navbarItemsList = [
    {
      path: "./burgers",
      Icon: burger,
      name: "Бургеры",
    },
    {
      path: "./snacks",
      Icon: snacks,
      name: "Закуски",
    },
    {
      path: "./hot-dogs",
      Icon: hotDog,
      name: "Хот-доги",
    },
    {
      path: "./combo",
      Icon: combo,
      name: "Комбо",
    },
    {
      path: "./kebab",
      Icon: kebab,
      name: "Шаурма",
    },
    {
      path: "./pizza",
      Icon: pizza,
      name: "Пицца",
    },
    {
      path: "./wok",
      Icon: wok,
      name: "Вок",
    },
    {
      path: "./dessert",
      Icon: dessert,
      name: "Десерт",
    },
    {
      path: "./sauce",
      Icon: sauce,
      name: "Соусы",
    },
  ];

  return navbarItemsList;
};

export { useNavbarItemsList };
