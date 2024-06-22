import { Skeleton } from "@/ui/Skeleton";
import * as style from "./ProductTape.module.css";
import { CartItemSkeleton } from "@/components/CartItem/ui/CartItemSkeleton";

export const ProductTapeSkeleton = () => {
  return (
    <section>
      <h2 className={style.menuTitle}>
        <Skeleton width={1200} height={50} />
      </h2>
      <div>
        <div className={style.menuCards}>
          {new Array(4).fill(0).map((_, i) => (
            <CartItemSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductTape = ({ products, title }) => {
  return (
    <section>
      <h2 className={style.menuTitle}>{title}</h2>

      <div className={style.menuCards}>{products}</div>
    </section>
  );
};

export { ProductTape };
