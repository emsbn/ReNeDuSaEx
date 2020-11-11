const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

// async action creator
// action creator
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  };
};
changeNickname('누렁이');
// {
//   type: 'CHANGE_NICKNAME',
//   data: '누렁이'
// }
store.dispatch(changeNickname('누렁이'));

// (이전상태, 액션) => 다음상태
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
