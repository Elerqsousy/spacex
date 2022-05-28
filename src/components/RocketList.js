import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReservation } from '../reduxFiles/rocketSlice';
import styles from '../styles.module.css';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const { list } = rockets;
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(toggleReservation(id));
  };

  return (
    <>
      {list.map((item) => {
        const {
          id, name, info, img, reserved,
        } = item;
        return (
          <article
            key={id}
            className={styles.rocketListContainer}
          >
            <div className={styles.rocketImgContainer}>
              <img alt={name} src={img} className={styles.rocketImg} />
            </div>
            <div className={styles.rocketInfoContainer}>
              <h3>{name}</h3>
              <p>
                {reserved ? <span className={styles.reservedBadge}>Reserved</span> : <></>}
                {' '}
                {info}
              </p>
              <button type="button" className={`${styles.btn} ${reserved ? styles.danger : ''}`} onClick={() => handleReservation(id)}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default RocketList;
