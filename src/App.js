import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FromSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function showAddFriendHandler() {
    setShowAddFriend((show) => !show);
  }
  function addFriendHandler(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function selectedFriendHandler(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function deleteFriendHandler(id) {
    setFriends((friends) => friends.filter((friend) => friend.id !== id));
    setSelectedFriend(null);
  }
  function splitBillHandler(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectedFriend={selectedFriendHandler}
          onDeleteFriend={deleteFriendHandler}
        />
        {showAddFriend && <FormAddFriend onAddFriend={addFriendHandler} />}
        <Button onClick={showAddFriendHandler}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FromSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={splitBillHandler}
        />
      )}
    </div>
  );
}
