import React from 'react';
import styles from './Cards.module.scss';
import { fetchCars, CarsData } from '../../api/cars';
import { useState, useEffect } from 'react';
import CardsButton from './CardsButton';
import { formatPrice, formatKilometer } from '../../helpers/utils';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Cards: React.FC = () => {
  const navigate = useNavigate();
  const [cars, setCar] = useState<CarsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCars();
        setCar(data);
      } catch (error) {
        setError('Не удалось загрузить карточки машин');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!cars.length) {
    return <div className={styles.empty}>Нет доступных машин</div>;
  }
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Список автомобилей</h1>
      <div className={styles.carsList}>
        {cars.map(car => (
          <div
            key={car.id}
            className={styles.carCard}
            onClick={() => navigate(`/cars/${car.id}`)}
            tabIndex={0}
          >
            <img src={car.img} alt={car.name} className={styles.carImage} />
            <div className={styles.carDetails}>
              <ul className={styles.carSpecs}>
                <li className={styles.carType}>{car.type}</li>
                <li className={styles.carDate}>
                  {new Date(car.post_date).toLocaleDateString('ru-RU')}
                </li>
                <li className={styles.carName}>{car.name}</li>
                <li className={styles.carPrice}>{formatPrice(car.price)}</li>
                <li>
                  <BsFillGeoAltFill />
                  <span className={styles.carCity}>{car.city}</span>
                </li>
                <li>
                  <span>{car.trade}</span>
                  <span>{formatKilometer(car.kilometer)}</span>
                </li>
              </ul>
              <CardsButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
