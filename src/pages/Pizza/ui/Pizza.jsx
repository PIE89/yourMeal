import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getPizza,
  getPizzaErrors,
  getPizzaLoading,
} from "@/redux/pizza/selectors/pizzaSelectors";
import { fetchNextPizzaPage } from "@/redux/pizza/services/fetchNextPizzaPage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const Pizza = () => {
  const pizza = useSelector(getPizza);
  const errors = useSelector(getPizzaErrors);
  const isLoading = useSelector(getPizzaLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextPizzaPage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (pizza.length > 0) {
      return pizza.map((el) => {
        return (
          <CartItem
            key={el.id}
            id={el.id}
            img={el.img}
            title={el.title}
            price={el.price}
            weight={el.weight}
            product={el.product}
            ingredients={el.ingredients}
          />
        );
      });
    } else {
      return (
        <h1 className="noProducts">
          Товаров пока нет, но мы над этим работаем...&#128522;
        </h1>
      );
    }
  }, [pizza]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }
  return (
    <>
      <ProductTape title={"Пицца"} products={item} />
      {isLoading && <ProductTapeSkeleton />}
      {!isLoading && <div ref={ref}></div>}
    </>
  );
};

export default Pizza;
