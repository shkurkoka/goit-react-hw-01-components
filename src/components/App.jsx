import user from './Profile/user.json';
import Profile from './Profile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory transactionsData={transactions} />
    </div>
  );
};


