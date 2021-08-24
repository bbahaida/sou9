import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        if (!location) {
          const { granted } = await Location.requestPermissionsAsync();
          if (granted) {
            const {
              coords: { latitude, longitude },
            } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return location;
};
