import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ReservedRocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(rockets.list.filter((rocket) => rocket.reserved === true));
  }, [rockets]);

  return (
    <div>
      <h1>My Rockets</h1>
      <ul>
        {list.length
          ? list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
          : <li>list is empty</li>}
      </ul>
    </div>
  );
};

export default ReservedRocketList;
