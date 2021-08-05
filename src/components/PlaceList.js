import { useEffect } from "react";

export function PlaceList({ loadPlaces }) {
  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);
  return <div>PlaceList</div>;
}

export default PlaceList;
