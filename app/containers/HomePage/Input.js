import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  padding: 0.5em 0.5em;
  border-radius: ${props => props.theme.radius};
  display: inline-block;
  margin-left: 14px;
  /* Color the border and text with theme.main */
  border: 1px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
`;

export default Input;
