import { IonItem, IonLabel, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';
import './RocketsList.css';
import axios from 'axios';

const RocketsList: React.FC = () => {

  const [rockets, setRockets] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://api.spacexdata.com/v4/rockets`)
      console.log(response)
      setRockets(response.data)
    })()
  }, [])

  return (
    <IonList>
      {
        rockets.map(rocket => {
          return (
            <IonItem key={rocket.id}>
              <IonLabel>{rocket.name}</IonLabel>
            </IonItem>
          )
        })
      }
    </IonList>
  );
};

export default RocketsList;
