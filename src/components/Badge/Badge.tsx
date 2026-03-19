import styles from './Badge.module.css';
import { Deal } from '@/services/dataService';

const Badge = ({ deal }: { deal: Deal }) => {
  return (
    <div className={styles.badge}>
      <h3 className={styles.badgeTitle}>
        {deal.discount}% off
        {deal.dineIn ? ' - Dine In' : ''}
      </h3>
      <small className={styles.badgeSubtitle}>Anytime today</small>
    </div>
  );
};

export default Badge;
