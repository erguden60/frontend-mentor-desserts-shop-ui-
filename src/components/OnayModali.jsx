// src/components/OnayModali.jsx (EXPORT DEFAULT DÜZELTİLMİŞ)

import Image from "next/image";
import styles from "./OnayModali.module.css";

// DİKKAT: Fonksiyonun başında "export default" olduğundan emin olun.
export default function OnayModali({ cartItems, onNewOrder }) {
  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <Image
          src="/assets/images/icon-order-confirmed.svg"
          alt="Order Confirmed"
          width={48}
          height={48}
        />
        <h2 className={styles.title}>Order Confirmed</h2>
        <p className={styles.subtitle}>We hope you enjoy your food!</p>

        <div className={styles.summaryContainer}>
          <ul className={styles.summaryList}>
            {cartItems.map((item) => (
              <li key={item.name} className={styles.summaryItem}>
                <Image
                  src={item.image.thumbnail}
                  alt={item.name}
                  width={40}
                  height={40}
                  className={styles.summaryImage}
                />
                <div className={styles.summaryDetails}>
                  <p>{item.name}</p>
                  <div className={styles.summaryInfo}>
                    <span className={styles.summaryQuantity}>
                      {item.quantity}x
                    </span>
                    <span>@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <span className={styles.summaryPrice}>
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.summaryTotal}>
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>

        <button className={styles.newOrderButton} onClick={onNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
