import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const diarys = [
  {
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '2 day',
  },
  {
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '3 days',
  },
  {
    title: 'Diary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '4 days',
  },
];
const Diary = () =>(
    <UserPageTemplate pageType="diary">
   {diarys.map(item => (
      <Card
        cardType="diary"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
    </UserPageTemplate>
  );
export default Diary;
