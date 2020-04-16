import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Diaries = ({ diaries }) =>  (
  <GridTemplate pageType="diaries">
   {diaries.map(({ id, title, content, created }) => (
      <Card
        id={id}
        cardType="diaries"
        title={title}
        content={content}
        created={created}
        key={title}
      />
    ))}
    </GridTemplate>
  );
  Diaries.propTypes = {
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
  
  Diaries.defaultProps = {
    diaries: [],
  };
  
  const mapStateToProps = state => {
    const { diaries } = state;
    return { diaries };
  };
  
  export default connect(mapStateToProps)(Diaries);
