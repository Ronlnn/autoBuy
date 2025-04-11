import React, { useState, useEffect } from 'react';
import styles from './CallButton.module.scss';
import { FaPhone } from 'react-icons/fa6';
import { fetchPhones} from '../../api/phone';

const CallButton: React.FC = () => {
  const [mainPhone, setMainPhone] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPhones();
        // Берем первый телефон из списка
        if (data.length > 0) {
          setMainPhone(data[0].digits);
        }
      } catch (error) {
        setError('Не удалось загрузить номер телефона');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className={styles.right}>
      <button className={styles.callButton}>
        <FaPhone className={styles.phoneIcon} />
        {loading && <span className={styles.status}>Загрузка...</span>}
        {error && <span className={styles.status}>{error}</span>}
        {mainPhone && !loading && !error && (
          <span className={styles.phoneNumber}>{mainPhone}</span>
        )}
        {!mainPhone && !loading && !error && (
          <span className={styles.status}>Номер недоступен</span>
        )}
      </button>
    </div>
  );
};

export default CallButton;