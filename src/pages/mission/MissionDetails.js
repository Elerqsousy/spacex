import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setJoinMission, setLeaveMission } from '../../reduxFiles/missionSlice';
import './mission.css';

const MissionDetails = (props) => {
  const {
    name, description, id, isornotamember,
  } = props;
  const dispatch = useDispatch();
  let btnName;
  let value;
  if (isornotamember) {
    btnName = 'member';
    value = 'ACTIVE MEMBER';
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

    <div>
      <table>
        <tbody>
          <tr className="book-details">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <p type="button" className={btnName}>{value}</p>
              <button className={isornotamember ? 'leave' : 'join'} type="button" id={id} onClick={() => handleSubscripe(id)}>
                {isornotamember ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div />

    </div>
  );
};

MissionDetails.propTypes = {
  id: PropTypes.string.isRequired,
  isornotamember: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionDetails;
