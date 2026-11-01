import "./App.css";
import { lazy, Suspense, useState } from "react";
import PageLoader from "./components/PageLoader";

// Each page is split into its own chunk and only downloaded when needed.
// The intro page is the landing page, so the login page and dashboard are
// prefetched in the background (browser idle time) once it has loaded.
const IntroPage = lazy(() => import("./layout/IntroPage"));
const LoginPage = lazy(() =>
  import(/* webpackPrefetch: true */ "./layout/LoginPage"),
);
const Dashboard = lazy(() =>
  import(/* webpackPrefetch: true */ "./layout/Dashboard"),
);

function App() {
  const [login, setlogin] = useState("");
  const handlelogin = (id) => {
    setlogin(id);
  };
  return (
    <div className="App" style={{ display: "relative" }}>
      <Suspense fallback={<PageLoader />}>
        {login === "dashboard" ? (
          <Dashboard />
        ) : login === "login" ? (
          <LoginPage handlelogin={handlelogin} />
        ) : (
          <IntroPage handlelogin={handlelogin} />
        )}
      </Suspense>
    </div>
  );
}

export default App;
