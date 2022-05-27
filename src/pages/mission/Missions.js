import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getLocal } from '../../Redux/Missions/Reducer';
import MissionDetails from './MissionDetails';
import { setError } from '../../Redux/Missions/DataActions';

const Missions = () => {
  const {
    data, loading, joinedMissions, error,
  } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();
  // console.log(data);

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

  const check = (id) => {
    try {
      const x = joinedMissions.filter((ids) => ids === id);
      if (x[0] === id) {
        return true;
      }
    } catch (err) {
      dispatch(setError(error));
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
