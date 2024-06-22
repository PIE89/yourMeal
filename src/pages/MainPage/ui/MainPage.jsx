import { useGetBurgers } from "@/api/rtkApi";
import { CartItem } from "@/components/CartItem";
import { ProductTape } from "@/components/ProductTape";
import { ProductTapeSkeleton } from "@/components/ProductTape/ui/ProductTape";
import { useMemo } from "react";

const MainPage = () => {
  const { data, isLoading, error } = useGetBurgers();

  const item = useMemo(() => {
    if (data === undefined) {
      return;
    }
    if (data !== undefined && data.length > 0) {
      return data.map((el) => {
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
  }, [data]);

  if (error) {
    return (
      <div className="error">
        Не удалось получить список товаров. Перезагрузите страницу
      </div>
    );
  }

  return (
    <>
      <ProductTape title={"Популярные"} products={item} isLoading={isLoading} />
      {isLoading && <ProductTapeSkeleton />}
    </>
  );
};

export default MainPage;
