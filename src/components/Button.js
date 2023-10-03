export default function Button({ children, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className="select, button">
      {children}
    </button>
  );
}
