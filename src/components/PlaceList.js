import { useEffect } from "react";

export function PlaceList({ loadPlaces, places }) {
  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);
  return (
    <ul>
      {places.map(place => (
        <li key={place.id}>{place.name}</li>
      ))}
    </ul>
  );
}

export default PlaceList;
