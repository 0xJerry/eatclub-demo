import { fetchRestaurantBySlug } from '@/services/dataService';
import { redirect } from 'next/navigation';
import styles from './RestaurantDetail.module.css';
import RestaurantImage from '@/components/RestaurantCard/components/RestaurantImage';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faPhone,
  faLocationDot,
  faBookOpen,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  params: Promise<{
    restaurantId: string;
  }>;
}

export default async function RestaurantPage({ params }: Props) {
  const { restaurantId } = await params;
  const restaurant = await fetchRestaurantBySlug(restaurantId);

  if (!restaurant) {
    redirect('/');
  }

  return (
    <div className={styles.restaurantDetails}>
      <ScrollToTop />
      <nav className={styles.nav}>
        <Link href="/" className={styles.btnBack}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.iconBack} />
          Back to all restaurants
        </Link>
      </nav>

      <section className={styles.imageWrapper}>
        <RestaurantImage
          imageLink={restaurant.imageLink}
          name={restaurant.name}
        />
        <div className={styles.newBadge}>⭐️ New</div>
      </section>

      <section className={styles.actionsGrid}>
        <button className={styles.actionItem}>
          <FontAwesomeIcon icon={faBookOpen} />
          <span>Menu</span>
        </button>
        <button className={styles.actionItem}>
          <FontAwesomeIcon icon={faPhone} />
          <span>Call us</span>
        </button>
        <button className={styles.actionItem}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Location</span>
        </button>
        <button className={styles.actionItem}>
          <FontAwesomeIcon icon={faHeart} />
          <span>Favourite</span>
        </button>
      </section>

      <section className={styles.titleSection}>
        <h1>{restaurant.name}</h1>
        <div className={styles.meta}>
          {restaurant.cuisines?.map((cuisine, index) => (
            <span key={index}>{cuisine}</span>
          ))}
          <span>$$</span>
        </div>
        <div className={styles.info}>
          <div className={styles.infoRow}>
            <FontAwesomeIcon icon={faClock} />
            <span>
              Hours: {restaurant.open?.toUpperCase()} -{' '}
              {restaurant.close?.toUpperCase()}
            </span>
          </div>
          <div className={styles.infoRow}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              {restaurant.address1} {restaurant.suburb} • 1.0km Away
            </span>
          </div>
        </div>
      </section>

      <section className={styles.dealsSection}>
        {restaurant.deals?.map(deal => (
          <div key={deal.objectId} className={styles.dealCard}>
            <div className={styles.dealContent}>
              <div className={styles.dealTitle}>⚡️ {deal.discount}% Off</div>
              <div className={styles.dealTime}>
                Between {deal.start || '12:00pm'} - {deal.end || '3:00pm'}
              </div>
              {deal.qtyLeft && (
                <small className={styles.dealQty}>
                  {deal.qtyLeft} Deals Left
                </small>
              )}
            </div>
            <button className={styles.btnRedeem}>Redeem</button>
          </div>
        ))}
      </section>
    </div>
  );
}
