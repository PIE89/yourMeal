import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getSnacks,
  getSnacksErrors,
  getSnacksLoading,
} from "@/redux/snacks/selectors/snacksSelectors";
import { fetchNextSnacksPage } from "@/redux/snacks/services/fetchNextSnacksPage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const Snacks = () => {
  const snacks = useSelector(getSnacks);
  const errors = useSelector(getSnacksErrors);
  const isLoading = useSelector(getSnacksLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextSnacksPage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (snacks.length > 0) {
      return snacks.map((el) => {
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
  }, [snacks]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <ProductTape title={"Снэки"} products={item} />
      {isLoading && <ProductTapeSkeleton />}
      {!isLoading && <div ref={ref}></div>}
    </>
  );
};

export default Snacks;
