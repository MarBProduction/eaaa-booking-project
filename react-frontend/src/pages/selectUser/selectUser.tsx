import "./selectUser.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";

const SelectUser = observer(() => {
  const { userStore } = useStores();
  const { userId } = userStore;

  const navigate = useNavigate();

  useEffect(() => {
    if (userId > 0) navigate("/booking");
  }, [userId]);

  return (
    <div id="select-user-main">
      <p id="select-user-title">Pick a test user</p>
      <div id="test-user-wrapper">
        <div
          className="test-user"
          onClick={() => {
            // updateUser(1);
            userStore.setUserId(1)
          }}
        >
          <p>Testy Test</p>
        </div>
        <div
          className="test-user"
          onClick={() => {
            // updateUser(2);
            userStore.setUserId(2)
          }}
        >
          <p>Tasty Tast</p>
        </div>
      </div>
    </div>
  );
});

export default SelectUser;
