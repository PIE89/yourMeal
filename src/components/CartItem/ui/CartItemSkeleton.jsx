import { Skeleton } from "@/ui/Skeleton";
import * as style from "./CartItem.module.css";

const CartItemSkeleton = () => {
  return (
    <article className={style.card}>
      <Skeleton className={style.cardPhoto} width={"100%"} height={220} />
      <Skeleton className={style.cardPrice} width={"100%"} height={33} />
      <Skeleton className={style.cardTitle} width={"100%"} height={21} />
      <Skeleton className={style.cardWeight} width={"100%"} height={21} />
      <Skeleton className={style.cardButton} width={"100%"} height={43} />
    </article>
  );
};

export { CartItemSkeleton };
