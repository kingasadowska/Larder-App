import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import AddProductBar from 'components/organisms/AddProductBar/AddProductBar';
import addIcon from 'assets/icons/add.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  
  padding: 25px 150px 25px 70px;
`;
 
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 85px;
`;
 
const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;
 
const StyledHeading = styled(Heading)`
  margin: 30px 0 0 0;
 
  ::first-letter {
    text-transform: uppercase;
  }
`;
 
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;
 
class GridTemplate extends Component {
  state = {
    isAddProductBarVisible: false,
  };

  toggleAddProductBar = () => {
    this.setState(prevState => ({
      isAddProductBarVisible: !prevState.isAddProductBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isAddProductBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.toggleAddProductBar}
            icon={addIcon}
            activecolor={pageContext}
          />
          <AddProductBar handleClose={this.toggleAddProductBar} isVisible={isAddProductBarVisible}  />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}
 
GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['diaries', 'bakeries', 'fruits']),
};
 
GridTemplate.defaultProps = {
  pageContext: 'diaries',
};
 
export default withContext(GridTemplate);