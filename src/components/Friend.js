import Button from "./Button";

export default function FriendsList({
  friend,
  selectedFriend,
  onSelectedFriend,
  onDeleteFriend,
}) {
  const selected = selectedFriend?.id === friend.id;
  return (
    <li className={selected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelectedFriend(friend)}>
        {selected ? "Close" : "Select"}
      </Button>
      <button
        className="delete, button"
        onClick={() => onDeleteFriend(friend.id)}
      >
        Delete
      </button>
    </li>
  );
}
