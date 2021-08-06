import { useEffect } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { loadPlaces } from "../store/places/actions";

export function PlaceList({ loadPlaces, places, loading, loadError }) {
  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);
  return (
    <>
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && <Alert severity="error">Places could not be loaded.</Alert>}

      <List>
        {places.map(place => (
          <ListItem key={place.id}>
            <ListItemText>{place.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const mapStateToProps = state => ({
  places: state.places.records,
  loading: state.places.loading,
  loadError: state.restaurants.loadError,
});

const mapDispatchToProps = { loadPlaces };

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
