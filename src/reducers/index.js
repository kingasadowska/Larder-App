const initialState = {
    fruits: [
      {
        id: 1,
        title: 'Fruit1',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day'
      },
      {
        id: 2,
        title: 'Fruit2',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day'
      },
      {
        id: 3,
        title: 'Fruit3',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day'
      },
      {
        id: 4,
        title: 'Fruit4',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day'
      },
    ],
    bakeries: [
      {
        id: 1,
        title: 'Bakery1',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
      {
        id: 2,
        title: 'Bakery2',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
      {
        id: 3,
        title: 'Bakery3',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
      {
        id: 4,
        title: 'Bakery4',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
    ],
    diaries: [
      {
        id: 1,
        title: 'Diary1',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
      {
        id: 2,
        title: 'Diary2',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
      {
        id: 3,
        title: 'Diary3',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
      {
        id: 4,
        title: 'Diary4',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_PRODUCT':
          return {
            ...state,
            [action.payload.productType]: [
              ...state[action.payload.productType].filter(product => product.id !== action.payload.id),
            ],
          };
        default:
          return state;
      }
  };
  
  export default rootReducer;
  