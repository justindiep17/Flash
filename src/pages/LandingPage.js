import { Grid, Button } from "@mui/material";
import { loginUser } from "../auth";

export default function LandingPage() {
  return (
    <main>
      <Grid container>
        <Grid item xs={12}>
          <Button onClick={loginUser}>Log In</Button>
        </Grid>
      </Grid>
    </main>
  );
}
