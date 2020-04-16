import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'diaries',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.diary:
        this.setState({ pageType: 'diaries' });
        break;
      case routes.bakery:
        this.setState({ pageType: 'bakeries' });
        break;
      case routes.fruit:
        this.setState({ pageType: 'fruits' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <DetailsTemplate pageType={pageType}>
        <p>{pageType}</p>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};
 
export default DetailsPage;