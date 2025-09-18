import { InputContainer } from "./styles";
function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
}

export default Input;
