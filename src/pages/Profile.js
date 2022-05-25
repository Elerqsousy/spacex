import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import updateOnLoad from '../components/onLoad';
import ReservedRocketList from '../components/ReservedRocketList';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    updateOnLoad(rockets.list);
  }, []);

  return (
    <div>
      <ReservedRocketList />
    </div>
  );
};

export default Profile;
