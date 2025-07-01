// src/components/Sepet.jsx (ONAY BUTONU İŞLEVSELLİĞİ EKLENMİŞ TAM VERSİYON)

import Image from "next/image";
import styles from "./Sepet.module.css";

// KRİTİK DÜZELTME: Dosya adı ve uzantısı doğru olmalı.
import SepetUrunu from "./Sepeturun";

// DEĞİŞİKLİK 1: onConfirmOrder fonksiyonunu prop olarak alıyoruz.
export default function Sepet({ cartItems, onRemove, onConfirmOrder }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className={styles.cartSection}>
      <h2 className={styles.title}>Your Cart ({totalItems})</h2>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            width={128}
            height={128}
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className={styles.itemList}>
            {cartItems.map((item) => (
              <SepetUrunu key={item.name} item={item} onRemove={onRemove} />
            ))}
          </ul>

          <div className={styles.orderTotal}>
            <span>Order Total</span>
            <span className={styles.totalPrice}>${orderTotal.toFixed(2)}</span>
          </div>

          <div className={styles.carbonNeutral}>
            <Image
              src="/assets/images/icon-carbon-neutral.svg"
              alt="Carbon Neutral"
              width={24}
              height={24}
            />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button className={styles.confirmButton} onClick={onConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
