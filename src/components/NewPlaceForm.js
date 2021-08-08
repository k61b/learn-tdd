import { useState } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { createPlace } from "../store/places/actions";

export function NewPlaceForm({ createPlace }) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createPlace(name).then(() => {
      setName("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Add Place"
        value={name}
        onChange={e => setName(e.target.value)}
        fullWidth
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-place-submit-button"
      >
        Add
      </Button>
    </form>
  );
}

const mapStateToProps = null;
const mapDispatchProps = { createPlace };

export default connect(mapStateToProps, mapDispatchProps)(NewPlaceForm);
