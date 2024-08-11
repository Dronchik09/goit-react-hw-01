import userData from "../userData.json";
import "./App.css";
import friends from "../friends.json"
import Profile from "./profile/Profile.jsx";
import Friendlist from "./friendlist/Friendlist.jsx"
const App = () => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <Friendlist friends={friends} />
      </>
    );
  };
  export default App;