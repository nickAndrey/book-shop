import Image from 'next/image';
import Typography from '../Typography/Typography';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  img: string;
  title: string;
  description: string;
  price: number;
};

export default function ProductCard({
  img,
  title,
  description,
  price,
}: ProductCardProps) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <Image src={img} alt="product image" fill />
      </div>

      <div className={styles['product-card__info-container']}>
        <Typography
          component="h2"
          variant="subheading"
          className={styles['product-card__title']}
        >
          {title}
        </Typography>

        <Typography
          component="p"
          variant="body"
          className={styles['product-card__description']}
        >
          {description}
        </Typography>

        <Typography
          component="p"
          variant="body"
          className={styles['product-card__price']}
        >
          {USDollar.format(price)}
        </Typography>
      </div>
    </div>
  );
}
