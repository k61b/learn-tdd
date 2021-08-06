import { useEffect } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { loadPlaces } from "../store/places/actions";

export function PlaceList({ loadPlaces, places }) {
  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);
  return (
    <List>
      {places.map(place => (
        <ListItem key={place.id}>
          <ListItemText>{place.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

const mapStateToProps = state => ({
  places: state.places.records,
});

const mapDispatchToProps = { loadPlaces };

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
