import { useEffect } from "react";
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  places: state.places.records,
});

export default connect(mapStateToProps)(PlaceList);
