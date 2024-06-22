import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getWok,
  getWokErrors,
  getWokLoading,
} from "@/redux/wok/selectors/wokSelectors";
import { fetchNextWokPage } from "@/redux/wok/services/fetchNextWokPage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const Wok = () => {
  const wok = useSelector(getWok);
  const errors = useSelector(getWokErrors);
  const isLoading = useSelector(getWokLoading);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextWokPage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (wok.length > 0) {
      return wok.map((el) => {
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
  }, [wok]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <ProductTape title={"Вок"} products={item} />
      {isLoading && <ProductTapeSkeleton />}
      {!isLoading && <div ref={ref}></div>}
    </>
  );
};

export default Wok;
