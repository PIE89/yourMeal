import { useDispatch, useSelector } from "react-redux";
import * as style from "./Basket.module.css";
import {
  getBasket,
  getBasketTotalCount,
} from "@/redux/basket/selectors/basketSelectors";
import { Count } from "@/ui/Count";
import { Icon } from "@/ui/Icon";
import Delivery from "@/img/icons/delivery.svg";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { useState } from "react";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket);
  const totalCount = useSelector(getBasketTotalCount);

  const [openBasket, setIsOpenBasket] = useState(false);

  const totalValue = basket.map((el) => el.price * el.count);
  const totalTotal = totalValue.reduce((sum, elem) => {
    return sum + elem;
  }, 0);

  const addItem = (element) => {
    dispatch(basketActions.addItem(element));
  };

  const deleteItem = (element) => {
    dispatch(basketActions.deleteItem(element));
  };

  const itemsList = () =>
    basket.map((item, i) => (
      <li key={i}>
        <img
          src={`./img/menu/${item.img}.jeg`}
          srcSet={`./img/menu/${item.img}@2x.jpg`}
          className={style.basketPositionsImg}
        />
        <div className={style.basketPositionsDescription}>
          <h6 className={style.positionsDescriptionTitle}>{item.title}</h6>
          <p className={style.positionsDescriptionWeight}>{item.weight}г</p>
          <p className={style.positionsDescriptionPrice}>{item.price}₽</p>
        </div>
        <div className={style.positionsDescriptionCount}>
          <Count
            itemCount={item.count}
            addItem={addItem}
            deleteItem={deleteItem}
            id={i}
          />
        </div>
      </li>
    ));

  const basketList = () => {
    return basket.length === 0 ? (
      <div className={style.emptyBasket}>
        Корзина пуста, давай заполним её? &#128523;
      </div>
    ) : (
      <>
        {" "}
        <ul className={style.basketPositions}>{itemsList()}</ul>
        <div className={style.basketFooter}>
          <div className={style.basketTotalInfo}>
            <p>Итого</p>
            <p>{totalTotal}₽</p>
          </div>
          <button className={style.basketButton}>Оформить заказ</button>
          <div className={style.basketDelivery}>
            <Icon Svg={Delivery} />
            <p className={style.deliveryDescription}>Бесплатная доставка</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <form className={style.menuBasket}>
      <div
        className={style.basketTitle}
        onClick={() => {
          setIsOpenBasket((res) => !res);
        }}
      >
        <h3>Корзина</h3>
        <div className={style.basketCount}>{totalCount}</div>
      </div>

      <div
        className={`${style.basketWrapper} ${
          openBasket ? `${style.active}` : ""
        }`}
      >
        {basketList()}
      </div>
    </form>
  );
};

export { Basket };
