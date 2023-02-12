import { Profile } from './Profile/Profile';
import user from './Profile/user';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        stats={user.stats}
      />
      <br />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <br />
      <FriendList friends={friends} />
      <br />
      <TransactionHistory items={transactions} />
    </>
  );
};
