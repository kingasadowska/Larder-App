import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Fruits = ({ fruits }) =>  (
    <GridTemplate pageType="fruits">
      {fruits.map(({ id, title, content, created }) => (
      <Card
        id={id}
        cardType="fruits"
        title={title}
        content={content}
        created={created}
        key={title}
      />
    ))}
    </GridTemplate>
  );

  Fruits.propTypes = {
    fruits: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
    ),
  };
  
  Fruits.defaultProps = {
    fruits: [],
  };
  
  const mapStateToProps = state => {
    const { fruits } = state;
    return { fruits };
  };
  
  export default connect(mapStateToProps)(Fruits);
