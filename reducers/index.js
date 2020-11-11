const initialState = {
  name: 'emsbn',
  age: 31,
  password: 'pwdr',
};

const changeNickname = {
  type: 'CHANGE_NICKNAME',
  data: '누렁이',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data,
      };
  }
};

export default rootReducer;
