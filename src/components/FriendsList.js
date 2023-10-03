import Friend from "./Friend";

export default function FriendsList({
  friends,
  selectedFriend,
  onSelectedFriend,
  onDeleteFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
    </ul>
  );
}
