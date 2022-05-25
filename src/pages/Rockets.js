import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import updateOnLoad from '../components/onLoad';
import RocketList from '../components/RocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    updateOnLoad(rockets.list);
  }, []);

  return (
    <div style={{ margin: '40px 10vw 0' }}>
      <RocketList list={rockets.list} />
    </div>
  );
};

export default Rockets;
