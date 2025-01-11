import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import LoadingScreen from "./components/loadingScreen/loadingScreen";
import { observer } from "mobx-react";
import { useStores } from "./hooks/useStores";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = observer(() => {
  const { userStore, uiStore } = useStores();
  const { userId } = userStore;
  const { showLoader } = uiStore;
  const userNames = ["Testy Test", "Tasty Tast"];
  const loggedInText = `Logged in as user ${userId}: ${userNames[userId - 1]}`;

  return (
    <div id="wrapper">
      <LoadingScreen showLoader={showLoader} />
      <ToastContainer />
      <section id="header">
        <div id="topbar">
          <h1>Studierum booking</h1>
          {userId > 0 && (
            <>
              <p id="logged-in-info-desktop">{loggedInText}</p>
              <button onClick={() => userStore.logOut()}>Log out</button>
            </>
          )}
        </div>
        {userId > 0 && <p id="logged-in-info-mobil">{loggedInText}</p>}
        <hr />
      </section>
      <section id="content">
        {userId > 0 && <NavBar />}
        <Outlet />
      </section>
    </div>
  );
});

export default App;
