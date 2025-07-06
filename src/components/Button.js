const Button = ({ className, value, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {value}
  </button>
);
export default Button;