import { auth } from "./config/firebase/firebaseSetup";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";

function Page2() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>LLLLOODkfdhajaddjfajlk</div>;
  }
  return (
    <div className="App">
      <Navbar />
      <h1>Hey</h1>
    </div>
  );
}

export default Page2;
