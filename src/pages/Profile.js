import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import updateOnLoad from '../components/onLoad';
import ReservedRocketList from '../components/ReservedRocketList';
import api from '../reduxFiles/api';
import local from '../reduxFiles/local';
import styles from '../styles.module.css';

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
    console.log(!localStorage.getItem('missions'));
    if (!data.length) {
      if (!localStorage.getItem('missions')) {
        dispatch(api.FETCH_DATA());
      } else {
        dispatch(local.FETCH_LOCAL_DATA());
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
    <div className={styles.prfileContainer}>
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
