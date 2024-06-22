import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getHotdogs,
  getHotdogsErrors,
  getHotdogsLoading,
} from "@/redux/hot-dogs/selectors/hotdogsSelectors";
import { fetchNextHotdogsPage } from "@/redux/hot-dogs/services/fetchNextHotdogsPage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const HotDogs = () => {
  const hotdogs = useSelector(getHotdogs);
  const errors = useSelector(getHotdogsErrors);
  const isLoading = useSelector(getHotdogsLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextHotdogsPage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (hotdogs.length > 0) {
      return hotdogs.map((el) => {
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
  }, [hotdogs]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <ProductTape title={"Хот-Доги"} products={item} />
      {isLoading && <ProductTapeSkeleton />}
      {!isLoading && <div ref={ref}></div>}
    </>
  );
};

export default HotDogs;
