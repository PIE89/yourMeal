import cls from "./Count.module.css";
import { useSelector } from "react-redux";
import { getBasket } from "@/redux/basket/selectors/basketSelectors";

const Count = ({ itemCount, id, addItem, deleteItem }) => {
  const item = useSelector(getBasket);

  return (
    <div className={cls.count}>
      <div className={cls.box}>
        <input
          name="number"
          id="number"
          className={cls.input}
          value={itemCount}
        />
      </div>
      <div className={cls.controls}>
        <button
          type="button"
          className={cls.minus}
          onClick={() => deleteItem(item[id])}
        >
          -
        </button>
        <button
          type="button"
          className={cls.plus}
          onClick={() => addItem(item[id])}
        >
          +
        </button>
      </div>
    </div>
  );
};

export { Count };
