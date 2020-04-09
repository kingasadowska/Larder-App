import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 30px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.grey200};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 70px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 16px 60%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
