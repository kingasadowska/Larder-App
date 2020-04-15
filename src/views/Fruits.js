import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const fruits = [
  {
    id: 1,
    title: 'Fruits',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Fruits',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 3,
    title: 'Fruits',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Fruits',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const Fruits = () =>  (
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
export default Fruits;
