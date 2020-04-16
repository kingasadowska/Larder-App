import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Bakeries = ({ bakeries }) => (
  <GridTemplate pageType="bakeries">
      {bakeries.map(({ id, title, content, created }) => (
      <Card
        id = {id}
        cardType="bakeries"
        title={title}
        content={content}
        created={created}
        key={title}
      />
    ))}
    </GridTemplate>
  );

  Bakeries.propTypes = {
    bakeries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
      }),
    ),
  };
  
  Bakeries.defaultProps = {
    bakeries: [],
  };
  
  const mapStateToProps = state => {
    const { bakeries } = state;
    return { bakeries };
  };
  
  export default connect(mapStateToProps)(Bakeries);
