import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import {
  getBurgers,
  getBurgersErrors,
  getBurgersLoading,
} from "@/redux/burgers/selectors/burgersSelectors";
import { fetchNextBurgersPage } from "@/redux/burgers/services/fetchNextBurgersPage";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const Burgers = () => {
  const burgers = useSelector(getBurgers);
  const errors = useSelector(getBurgersErrors);
  const isLoading = useSelector(getBurgersLoading);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!errors) {
      dispatch(fetchNextBurgersPage());
    }
  }, [dispatch, inView, errors]);

  const item = useMemo(() => {
    if (burgers.length > 0) {
      return burgers.map((el) => {
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
  }, [burgers]);

  if (errors) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <>
        <ProductTape title={"Бургеры"} products={item} />
        {isLoading && <ProductTapeSkeleton />}
        {!isLoading && <div ref={ref}></div>}
      </>
    </>
  );
};

export default Burgers;
