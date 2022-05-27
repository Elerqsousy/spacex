import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReservation } from '../reduxFiles/rocketSlice';

const ReservedRocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  const openLink = (url) => {
    window.open(url);
  };

  const handleReservation = (id) => {
    dispatch(toggleReservation(id));
  };

  useEffect(() => {
    setList(rockets.list.filter((rocket) => rocket.reserved === true));
  }, [rockets]);

  return (
    <div>
      <h1>My Rockets</h1>
      <ul>
        {list.length
          ? list.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <Button onClick={() => { openLink(item.url); }}>More</Button>
              <Button variant="primary" onClick={() => handleReservation(item.id)}>Cancel Reservation</Button>
            </li>
          ))
          : <li>list is empty</li>}
      </ul>
    </div>
  );
};

export default ReservedRocketList;
