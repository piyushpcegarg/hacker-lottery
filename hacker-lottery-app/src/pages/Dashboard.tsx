import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import API from '../api';

interface Lobby {
  name: string;
}

const Dashboard = () => {

  const [lobby , setLobby] = useState<Lobby[]>([]);

  useEffect(() => {
    API.get('/lobby')
      .then((res) => {
        setLobby(res.data);
      });
  }, []);

  console.log('dashboard rendering');
  console.log(lobby);
  return (
    <h1>
      <FormattedMessage id={'dashboard'} />
    </h1>
  );
};

export default Dashboard;
