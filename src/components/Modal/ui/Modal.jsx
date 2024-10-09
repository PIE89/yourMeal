import {
  getProduct,
  getProductCount,
} from "@/redux/productItem/selectors/productItemSelectors";
import cls from "./Modal.module.css";
import { Button } from "@/ui/Button";
import { Count } from "@/ui/Count";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { basketActions } from "@/redux/basket/slice/basketSlice";

const Modal = ({ isOpen, handleClick }) => {
  const item = useSelector(getProduct);
  const itemCount = useSelector(getProductCount);
  const dispatch = useDispatch();

  const { title, img, description, weight, ingredients, price } = item;

  const handleClickEsc = (e) => {
    if (e.key === "Escape") {
      handleClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleClickEsc);

    return () => {
      window.removeEventListener("keydown", handleClickEsc);
    };
  }, []);

  const addItemCount = (element) => {
    dispatch(productActions.increase(element));
    dispatch(
      basketActions.addItem({
        ...item,
        count: itemCount,
      })
    );
  };

  const deleteItemCount = (element) => {
    if (itemCount > 0) {
      dispatch(productActions.decrease(element));
      dispatch(
        basketActions.deleteItem({
          ...item,
          count: itemCount,
        })
      );
    } else {
      alert("Необходимо добавить товар");
    }
  };

  const handleClickToAdd = () => {
    handleClick();
  };

  return (
    <>
      {isOpen && (
        <div
          className={classNames(isOpen ? cls.modal : `${cls.modal} none`)}
          onClick={handleClick}
        >
          <div className={cls.content} onClick={(e) => e.stopPropagation()}>
            <div className={cls.header}>
              <h2 className={cls.title}>{title}</h2>
            </div>

            <div className={cls.main}>
              <img
                src={`./img/menu/${img}.jpg`}
                srcSet={`./img/menu/${img}@2x.jpg`}
                className={cls.burger}
              />

              <div className={cls.info}>
                <span className={cls.description}>{description}</span>

                <h3 className={cls.composition}>Состав:</h3>
                <ul className={cls.listIngredients}>
                  {ingredients &&
                    ingredients.map((ingredient, i) => (
                      <li className={cls.ingredients} key={i}>
                        {ingredient}
                      </li>
                    ))}
                </ul>

                <span className={cls.weight}>{weight}г, ккал 430</span>
              </div>
            </div>

            <div className={cls.footer}>
              <div className={cls.actions}>
                <Button
                  className={cls.btn}
                  type={"neutral"}
                  border
                  onClick={() => handleClickToAdd()}
                >
                  Изменить
                </Button>
                <Count
                  itemCount={itemCount}
                  deleteItem={deleteItemCount}
                  addItem={addItemCount}
                />
              </div>
              <span className={cls.price}>{itemCount * price}₽</span>
            </div>

            <Button className={cls.close} onClick={() => handleClick()} />
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
