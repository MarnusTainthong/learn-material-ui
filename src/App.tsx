import { Button, CssBaseline, TextField } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <TextField
          id="emailInput"
          name="emailInput"
          label="Email"
          type="email"
          placeholder="please enter email"
          autoComplete="email"
          autoFocus
          required
          fullWidth
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
    </>
  );
}

export default App;
