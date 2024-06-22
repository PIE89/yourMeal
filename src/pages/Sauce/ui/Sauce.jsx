import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getSauce,
  getSauceErrors,
  getSauceLoading,
} from "@/redux/sauce/selectors/sauceSelectors";
import { fetchNextSaucePage } from "@/redux/sauce/services/fetchNextSaucePage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const Sauce = () => {
  const sauce = useSelector(getSauce);
  const errors = useSelector(getSauceErrors);
  const isLoading = useSelector(getSauceLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextSaucePage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (sauce.length > 0) {
      return sauce.map((el) => {
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
  }, [sauce]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <ProductTape title={"Соусы"} products={item} />
      {isLoading && <ProductTapeSkeleton />}
      {!isLoading && <div ref={ref}></div>}
    </>
  );
};

export default Sauce;
