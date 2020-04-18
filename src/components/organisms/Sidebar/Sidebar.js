import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoutIcon from 'assets/icons/logout.svg';
import productIcon from 'assets/icons/products.svg';
import fruitIcon from 'assets/icons/fruit.svg';
import bakeryIcon from 'assets/icons/bakery.svg';
import logoIcon from 'assets/logo.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.diary)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 75px;
  height: 75px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to="/diaries" icon={productIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/bakeries" icon={bakeryIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/fruits" icon={fruitIcon} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.string.isRequired,
};

Sidebar.defaultProps = {
  pageContext: 'diaries',
};

export default withContext(Sidebar);
