import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const diaries = [
  {
    id: 1,
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '2 day',
  },
  {
    id: 3,
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '3 days',
  },
  {
    id: 4,
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '4 days',
  },
];
const Diary = () =>(
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
export default Diary;
