import Home from "./routes/Home";
import Page2 from "./Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "./auth";
import { auth } from "./config/firebase/firebaseSetup";
import flashTheme from "./config/flashTheme";
import Dashboard from "./pages/Dashboard";
import EditDeckPage from "./pages/EditDeckPage";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <main>Loading</main>;
  }

  return (
    <ThemeProvider theme={flashTheme}>
      <AuthContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="2" element={<Page2 />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="deck/:id" element={<Dashboard />}></Route>
            <Route path="edit/:id" element={<EditDeckPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
