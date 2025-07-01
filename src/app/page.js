// src/app/page.jsx (TÜM FONKSİYONLAR EKLENMİŞ, TAM VERSİYON)

"use client";

import { useState } from "react";
import styles from "./page.module.css";
import dessertsData from "../data/desserts.json";
import DessertKarti from "../components/Dessert.cart.jsx";
import Sepet from "../components/Sepet.jsx";
import OnayModali from "../components/OnayModali.jsx";

export default function Home() {
  // 1. STATE TANIMLAMALARI
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. FONKSİYON TANIMLAMALARI (HATANIN KAYNAĞI BU BÖLÜMÜN EKSİK OLMASIYDI)

  // Sepete ürün ekler veya miktarını artırır
  const handleAddToCart = (dessertToAdd) => {
    const itemInCart = cartItems.find(
      (item) => item.name === dessertToAdd.name
    );

    if (itemInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.name === dessertToAdd.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...dessertToAdd, quantity: 1 }]);
    }
  };

  // Ürün miktarını azaltır, 1 ise sepetten çıkarır
  const handleDecreaseQuantity = (dessertToDecrease) => {
    const itemInCart = cartItems.find(
      (item) => item.name === dessertToDecrease.name
    );
    if (itemInCart.quantity === 1) {
      handleRemoveFromCart(dessertToDecrease.name);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.name === dessertToDecrease.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // Ürünü sepetten tamamen kaldırır
  const handleRemoveFromCart = (itemName) => {
    setCartItems(cartItems.filter((item) => item.name !== itemName));
  };

  // Siparişi onaylar ve onay modalını açar
  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      setIsModalOpen(true);
    }
  };

  // Yeni sipariş başlatır, sepeti ve modalı sıfırlar
  const handleNewOrder = () => {
    setCartItems([]);
    setIsModalOpen(false);
  };

  // 3. JSX RENDER BLOĞU
  return (
    <>
      <main className={styles.container}>
        <div className={styles.dessertsSection}>
          <h1>Desserts</h1>
          <div className={styles.dessertsGrid}>
            {dessertsData.map((dessert) => {
              const itemInCart = cartItems.find(
                (item) => item.name === dessert.name
              );
              const quantity = itemInCart ? itemInCart.quantity : 0;
              return (
                <DessertKarti
                  key={dessert.name}
                  dessert={dessert}
                  onAddToCart={handleAddToCart}
                  onDecreaseQuantity={handleDecreaseQuantity}
                  quantity={quantity}
                />
              );
            })}
          </div>
        </div>

        <Sepet
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onConfirmOrder={handleConfirmOrder}
        />
      </main>

      {isModalOpen && (
        <OnayModali cartItems={cartItems} onNewOrder={handleNewOrder} />
      )}
    </>
  );
}
