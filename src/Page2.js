import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Page2() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>LLLLOODkfdhajaddjfajlk</div>;
  }
  return (
    <div className="App">
      <h1>Hey</h1>
    </div>
  );
}

export default Page2;
