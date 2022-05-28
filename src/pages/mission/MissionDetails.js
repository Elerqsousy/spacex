import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setJoinMission, setLeaveMission } from '../../reduxFiles/missionSlice';
import './mission.css';
import styles from '../../styles.module.css';

const MissionDetails = (props) => {
  const {
    name, description, id, isornotamember, index,
  } = props;
  const dispatch = useDispatch();
  let btnName;
  let value;
  if (isornotamember) {
    btnName = 'member';
    value = 'Active Member';
  } else {
    btnName = 'notMember';
    value = 'NOT A MEMBER';
  }

  const handleSubscripe = (id) => {
    if (isornotamember) {
      return dispatch(setLeaveMission(id));
    }
    return dispatch(setJoinMission(id));
  };

  return (
    <div
      className={`${styles.tableRow} ${
        index === 0 || index % 2 === 0 ? styles.dynamicBackground : ''
      }`}
    >
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.condetionalDivFlex}>
        <span className={btnName === 'member' ? styles.memberBadge : styles.notAMemberBadge}>
          {value}
        </span>
      </div>
      <div className={styles.condetionalDivFlex}>
        <button
          className={`${styles.btn} ${isornotamember ? styles.danger : ''}`}
          type="button"
          id={id}
          onClick={() => handleSubscripe(id)}
        >
          {isornotamember ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
};

MissionDetails.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isornotamember: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionDetails;
