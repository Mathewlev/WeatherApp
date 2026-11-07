import { useEffect, useState } from "react";
import { Coordinates } from "../wrappers/weatherCardCarousel/locations";

export function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState<Coordinates | null>(
    null,
  );
  const [isLocating, setIsLocating] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setIsLocating(false);
      },
      () => setIsLocating(false),
    );
  }, []);

  return { currentLocation, isLocating };
}
