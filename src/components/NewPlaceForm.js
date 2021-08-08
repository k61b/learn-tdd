import { useState } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { createPlace } from "../store/places/actions";

export function NewPlaceForm({ createPlace }) {
  const [name, setName] = useState("");
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (name) {
      setValidationError(false);
      createPlace(name).then(() => {
        setName("");
      });
    } else {
      setValidationError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {validationError && <Alert severity="error">Name is required</Alert>}
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
