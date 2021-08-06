import { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function NewPlaceForm({ createPlace }) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createPlace(name);
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

export default NewPlaceForm;
