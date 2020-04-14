import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const fruits = [
  {
    title: 'Fruits',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Fruits',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Fruits',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    title: 'Fruits',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const Fruits = () =>  (
    <GridTemplate pageType="fruits">
       {fruits.map(item => (
      <Card
        cardType="fruits"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
    </GridTemplate>
  );
export default Fruits;
