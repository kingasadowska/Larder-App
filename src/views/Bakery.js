import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const bakery = [
  {
    id: 1,
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day'
  },
  {
    id: 2,
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day'
  },
  {
    id: 3,
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days'
  },
  {
    id: 4,
    title: 'Bakery',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days'
  },
];
 
const Bakerys = () => (
  <GridTemplate pageType="bakeries">
      {bakery.map(({ id, title, content, created }) => (
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

export default Bakerys;
