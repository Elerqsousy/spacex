import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReservation } from '../reduxFiles/rocketSlice';
import styles from '../styles.module.css';

const ReservedRocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  const openLink = (url) => {
    window.open(url);
  };

  const handleReservation = (id) => {
    dispatch(toggleReservation(id));
  };

  useEffect(() => {
    setList(rockets.list.filter((rocket) => rocket.reserved === true));
  }, [rockets]);

  return (
    <article className={styles.profileSection}>
      <h2>My Rockets</h2>
      <ul className={styles.profileList}>
        {list.length
          ? list.map((item) => (
            <li className={styles.ProfileistItem} key={item.id}>
              <span>{item.name}</span>
              <div className={styles.btnsGroup}>
                <button type="button" className={`${styles.btn} ${styles.info}`} onClick={() => { openLink(item.url); }}>Info</button>
                <button type="button" className={`${styles.btn} ${styles.danger}`} variant="primary" onClick={() => handleReservation(item.id)}>Cancel Reservation</button>
              </div>
            </li>
          ))
          : <li>You have not reserved any rockets!</li>}
      </ul>
    </article>
  );
};

export default ReservedRocketList;
