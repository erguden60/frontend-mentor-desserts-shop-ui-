// src/components/DessertKarti.jsx (SYNTAX HATASI DÜZELTİLMİŞ)

// DİKKAT: Bu import yolunun, stil dosyanızın gerçek adıyla eşleştiğinden emin olun!
import styles from "./DessertCart.module.css";

// --- İkon Bileşenleri ---
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    {" "}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.306 14.333a1.667 1.667 0 1 0 3.333 0 1.667 1.667 0 0 0-3.333 0Zm10 0a1.667 1.667 0 1 0 3.334 0 1.667 1.667 0 0 0-3.334 0ZM2.973 1.667H5.473l2.666 10h9.167l2.166-6.667H7.14"
    />{" "}
  </svg>
);
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    {" "}
    <path
      fill="#fff"
      d="M10 4.375H5.625V0H4.375v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
    />{" "}
  </svg>
);
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="2"
    fill="none"
    viewBox="0 0 10 2"
  >
    {" "}
    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />{" "}
  </svg>
);

// DÜZELTME: Fonksiyon parametreleri doğru şekilde listelendi.
export default function DessertKarti({
  dessert,
  onAddToCart,
  onDecreaseQuantity,
  quantity,
}) {
  const { name, category, price, image } = dessert;
  const isInCart = quantity > 0;

  return (
    <div className={styles.card}>
      <div
        className={`${styles.imageWrapper} ${
          isInCart ? styles.imageWrapperSelected : ""
        }`}
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 640px)" srcSet={image.tablet} />
          <img src={image.mobile} alt={name} className={styles.dessertImage} />
        </picture>
      </div>

      {!isInCart ? (
        <button
          className={styles.addToCartButton}
          onClick={() => onAddToCart(dessert)}
        >
          <CartIcon />
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className={styles.quantitySelector}>
          <button
            className={styles.quantityButton}
            onClick={() => onDecreaseQuantity(dessert)}
            aria-label={`Decrease quantity of ${name}`}
          >
            <MinusIcon />
          </button>
          <span className={styles.quantityText}>{quantity}</span>
          <button
            className={styles.quantityButton}
            onClick={() => onAddToCart(dessert)}
            aria-label={`Increase quantity of ${name}`}
          >
            <PlusIcon />
          </button>
        </div>
      )}

      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
