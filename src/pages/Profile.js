import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getLocal } from '../Redux/Missions/Reducer';
import updateOnLoad from '../components/onLoad';
import ReservedRocketList from '../components/ReservedRocketList';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    updateOnLoad(rockets.list);
  }, []);

  // Missions
  const {
    data, joinedMissions,
  } = useSelector((state) => state.DataReducer);

  const [registeredMissions, setRegisteredMissions] = useState([]);
  const dispatch = useDispatch();

  const handleLoadData = () => {
    if (!data.length) {
      if (!localStorage.getItem('data')) {
        dispatch(getData());
      } else {
        dispatch(getLocal());
      }
    }
  };
  useEffect(() => {
    handleLoadData();
  }, []);

  useEffect(() => {
    setRegisteredMissions(joinedMissions.map((id) => data.find(
      (mission) => mission.mission_id === id,
    )));
  }, [joinedMissions]);

  return (
    <div>
      <table style={{ marginTop: 100 }}>
        <tbody>
          { registeredMissions.length
            ? registeredMissions.map((join) => (
              <tr key={join?.mission_id}>
                <td>
                  <p>{join?.mission_name}</p>
                </td>
              </tr>
            ))
            : <tr><td><p className="notmember">You have not joined any missions</p></td></tr>}
        </tbody>
      </table>
      <ReservedRocketList />
    </div>
  );
};

export default Profile;
