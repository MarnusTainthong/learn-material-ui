import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          padding: "2rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "10vh",
          border: "1px solid #eee",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: "4px",
        }}
      >
        <Stack spacing={2}>
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
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Please enter password"
              required
              fullWidth
              variant="outlined"
            />
          </div>
          <div>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </div>
          <div>
            <Button type="submit" variant="contained">
              Sign in
            </Button>
          </div>
          <div>
            <Typography component="div" variant="body2">
              <span>
                <Link href="#" variant="body2">
                  Sign up
                </Link>
              </span>
            </Typography>
          </div>
        </Stack>
      </Box>
    </>
  );
}

export default App;
