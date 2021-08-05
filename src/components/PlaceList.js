import { useEffect } from "react";
import { connect } from "react-redux";
import { loadPlaces } from "../store/places/actions";

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

const mapDispatchToProps = { loadPlaces };

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
