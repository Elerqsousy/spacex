import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReservation } from '../reduxFiles/rocketSlice';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const { list } = rockets;
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(toggleReservation(id));
  };

  return (
    <>
      {list.map((item) => {
        const {
          id, name, info, img, reserved,
        } = item;
        return (
          <div
            key={id}
            style={{
              width: '100%',
              display: 'flex',
              marginBottom: 20,
              border: '1px solid rgba(0,0,0,.125)',
              borderRadius: '.25rem',
            }}
          >
            <Card style={{ width: '20%', border: 'unset' }}>
              <Card.Img variant="top" src={img} />
            </Card>
            <Card style={{ width: '80%', border: 'unset' }}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  {reserved ? <span className="reserved-badge">Reserved</span> : <></>}
                  {' '}
                  {info}
                </Card.Text>
                <Button variant="primary" onClick={() => handleReservation(id)}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default RocketList;
