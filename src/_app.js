import Home from "./routes/Home";
import Page2 from "./Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { authContext } from "./auth";

function App() {
  const flashTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#004299",
      },
      secondary: {
        main: "#ffc130",
      },
    },
  });

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <ThemeProvider theme={flashTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
