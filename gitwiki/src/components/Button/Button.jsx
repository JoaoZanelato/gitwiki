import { StyledButton } from "./styles";
function Button({ onClick }) {
  return <StyledButton onClick={onClick}><b>Buscar</b></StyledButton>;
}

export default Button;
