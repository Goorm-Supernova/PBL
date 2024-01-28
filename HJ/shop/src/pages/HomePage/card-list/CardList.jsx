import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchProducts } from "../../../store/products/products.slice";
import styles from "./CardList.module.scss";
import CardItem from "./card-item/CardItem";

const CardList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <ul className={styles.card_list}>
      {products.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CardList;
