import userData from "../userData.json";
import "./App.css";
import transactions from "../transactions.json";
import friends from "../friends.json"
import Profile from "./profile/Profile.jsx";
import Friendlist from "./friendlist/Friendlist.jsx"
import TransactionHistory from "./transactionhistory/TransactionHistory.jsx";
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
        <TransactionHistory transactions={transactions} />
      </>
    );
  };
  export default App;