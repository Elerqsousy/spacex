import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../reduxFiles/api';
import local from '../../reduxFiles/local';
import MissionDetails from './MissionDetails';

const Missions = () => {
  const {
    data, loading, joinedMissions,
  } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();

  const handleLoadData = () => {
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

  const check = (id) => {
    const x = joinedMissions.filter((ids) => ids === id);
    if (x[0] === id) {
      return true;
    }
    return false;
  };

  let fetchedData = '';
  if (loading) {
    fetchedData = <h2>Hold on...</h2>;
  } else {
    fetchedData = data.map((datum) => (
      <div
        key={datum.mission_id}
      >
        <MissionDetails
          id={datum.mission_id}
          name={datum.mission_name}
          description={datum.description}
          isornotamember={check(datum.mission_id)}
        />
      </div>
    ));
  }
  return (
    <div className="page-container">
      {fetchedData}
    </div>
  );
};

export default Missions;
