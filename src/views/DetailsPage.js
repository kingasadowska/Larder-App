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
        console.log('Something wrong');
    }
  }

  render() {

    const sample = {
      id: 1,
      title: 'Sample',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={sample.title}
        created={sample.created}
        content={sample.content}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};
 
export default DetailsPage;