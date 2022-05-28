import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import updateOnLoad from '../components/onLoad';
import RocketList from '../components/RocketList';
import styles from '../styles.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    updateOnLoad(rockets.list);
  }, []);

  return (
    <div className={styles.rocketsContainer}>
      <RocketList />
    </div>
  );
};

export default Rockets;
