// src/components/SepetUrunu.jsx

import React from "react";
import styles from "./SepetUrun.module.css";

const RemoveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    <path
      fill="currentColor"
      d="M8.333 9.167 5 5.833 1.667 9.167.833 8.333 4.167 5 .833 1.667 1.667.833 5 4.167 8.333.833 9.167 1.667 5.833 5 9.167 8.333l-.834.834Z"
    />
  </svg>
);

export default function SepetUrunu({ item, onRemove }) {
  if (!item) {
    return null;
  }

  const lineTotal = item.price * item.quantity;

  return (
    <li className={styles.cartItem}>
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <div className={styles.itemInfo}>
          <span className={styles.quantity}>{item.quantity}x</span>
          <span className={styles.price}>@ ${item.price.toFixed(2)}</span>
        </div>
      </div>

      <div className={styles.rightSection}>
        <span className={styles.lineTotal}>${lineTotal.toFixed(2)}</span>
        <button
          className={styles.removeButton}
          onClick={() => onRemove(item.name)}
          aria-label={`Remove ${item.name} from cart`}
        >
          <RemoveIcon />
        </button>
      </div>
    </li>
  );
}
