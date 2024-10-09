import { useDispatch, useSelector } from "react-redux";
import * as style from "./CartItem.module.css";
import { fetchProduct } from "@/redux/productItem/services/fetchProductItem";
import { useContext } from "react";
import { LayoutContext } from "@/provider/LayoutContextProvider";
import { Button } from "@/ui/Button";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { getBasket } from "@/redux/basket/selectors/basketSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";

const CartItem = ({ id, img, title, price, weight, product, ingredients }) => {
  const dispatch = useDispatch();
  const { handleClick } = useContext(LayoutContext);
  const basket = useSelector(getBasket);

  const handleClickCard = () => {
    handleClick();

    const repObj = basket.find((res) => {
      return res.product === product && res.id === id;
    });

    if (repObj === undefined) {
      dispatch(
        fetchProduct({
          id: id,
          product: product,
        })
      );
    } else {
      dispatch(fetchProduct(repObj));
      dispatch(productActions.setCount(repObj.count));
    }
  };

  const handleClickToAdd = (e) => {
    e.stopPropagation();

    dispatch(
      basketActions.addItem({
        id: id,
        img: img,
        title: title,
        price: price,
        weight: weight,
        product: product,
        ingredients: ingredients,
        count: 0,
      })
    );
  };

  return (
    <article
      onClick={() => {
        handleClickCard(id);
      }}
      className={style.card}
      key={id}
    >
      <img
        src={`./img/menu/${img}.jpg`}
        srcSet={`./img/menu/${img}@2x.jpg`}
        alt={title}
        className={style.cardPhoto}
      />
      <p className={style.cardPrice}>{price}₽</p>
      <h6 className={style.cardTitle}>{title}</h6>
      <p className={style.cardWeight}>{weight}г</p>
      <Button
        className={style.cardButton}
        type={"neutral"}
        border
        onClick={(e) => handleClickToAdd(e)}
      >
        Добавить
      </Button>
    </article>
  );
};

export { CartItem };
