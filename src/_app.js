import Home from "./routes/Home";
import Page2 from "./Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase/firebaseSetup";
import flashTheme from "./config/flashTheme";

function App() {
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
