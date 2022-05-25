import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketList from '../components/RocketList';
import api from '../redux/api';
import local from '../redux/local';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  const updateOnLoad = () => {
    if (!rockets.list.length) {
      if (!localStorage.getItem('rockets')) {
        dispatch(api.fetchRockets());
      } else {
        dispatch(local.getRockets('rockets'));
      }
    }
  };

  useEffect(() => {
    updateOnLoad();
  }, []);

  return (
    <div style={{ margin: '40px 10vw 0' }}>
      <RocketList list={rockets.list} />
    </div>
  );
};

export default Rockets;
