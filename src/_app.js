import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "./auth";
import { auth } from "./config/firebase/firebaseSetup";
import flashTheme from "./config/flashTheme";
import Dashboard from "./pages/Dashboard";
import EditDeckPage from "./pages/EditDeckPage";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";
import PublicDeckPage from "./pages/PublicDeckPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={flashTheme}>
      <AuthContext.Provider value={user}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="deck/:id" element={<PublicDeckPage />}></Route>
            <Route path="edit/:id" element={<EditDeckPage />}></Route>
            <Route path="editProfile" element={<EditProfilePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
