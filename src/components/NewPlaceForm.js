import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function NewPlaceForm() {
  return (
    <form>
      <TextField placeholder="Add Place" fullWidth variant="filled" />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default NewPlaceForm;
