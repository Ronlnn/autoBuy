import React from 'react';
import styles from './CardsButton.module.scss';
import { useNavigate } from 'react-router-dom';

const CardsButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cars/${carId}`);
  };
  return (
    <>
      <button className={styles.cardsButton} onClick={handleClick}>
        Подробнее
      </button>
    </>
  );
};

export default CardsButton;
