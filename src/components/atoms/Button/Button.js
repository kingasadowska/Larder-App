import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.primary};
  width: 210px;
  height: 44px;
  border: none;
  border-radius: 30px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 17px;
  text-transform: uppercase;
  color: white;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
