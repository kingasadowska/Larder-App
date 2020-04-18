import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifier.svg';

const Input = styled.input`
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 20px;

  ::placeholder {
    letter-spacing: 2px;
    color: ${({ theme }) => theme.grey200};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 15px 15px 15px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 13px;
      background-position: 18px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
