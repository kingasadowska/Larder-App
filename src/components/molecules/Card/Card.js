import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 20px 35px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

class Card extends Component {
  state = {
    redirect: false,
  };
 
  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, content } = this.props;
    const { redirect } = this.state;
 
    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }
    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>SEE MORE</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cardType: PropTypes.oneOf(['diaries', 'fruits', 'bakeries']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'diaries',
};

export default Card;
