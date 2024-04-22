import ButtonProps from "./ButtonProps";

const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
