import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const bakery = [
  {
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day'
  },
  {
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day'
  },
  {
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days'
  },
  {
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days'
  },
];
 
const Bakerys = () => (
    <UserPageTemplate pageType="bakery">
      {bakery.map(item => (
      <Card
        cardType="bakery"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
    </UserPageTemplate>
  );

export default Bakerys;
