import { useSelector } from 'react-redux';

const ReservedRocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  const reservedRockets = rockets.list.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <h1>My Rockets</h1>
      <ul>
        {reservedRockets.length
          ? reservedRockets.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
          : <li>list is empty</li>}
      </ul>
    </div>
  );
};

export default ReservedRocketList;
