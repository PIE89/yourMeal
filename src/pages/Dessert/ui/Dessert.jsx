import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getDessert,
  getDessertErrors,
  getDessertLoading,
} from "@/redux/dessert/selectors/dessertSelectors";
import { fetchNextDessertPage } from "@/redux/dessert/services/fetchNextDessertPage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const Dessert = () => {
  const dessert = useSelector(getDessert);
  const errors = useSelector(getDessertErrors);
  const isLoading = useSelector(getDessertLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextDessertPage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (dessert.length > 0) {
      return dessert.map((el) => {
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
  }, [dessert]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <ProductTape title={"Десерты"} products={item} />
      {isLoading && <ProductTapeSkeleton />}
      {!isLoading && <div ref={ref}></div>}
    </>
  );
};

export default Dessert;
