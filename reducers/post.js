export const initialState = {
  mainPosts: [
    {
      id: 1,
      user: {
        id: 1,
        nickname: '누렁이',
      },
      content: '첫 번째 게시글 #누렁 #해시태그',
      images: [
        {
          src:
            'https://s.pstatic.net/static/newsstand/2020/1117/article_img/new_main/9003/231716_001.jpg',
        },
        {
          src:
            'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F2020%2F1117%2Fupload_21526941067486605uHL2Z.jpg%22&type=nf340_228',
        },
        {
          src:
            'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F2020%2F1114%2Fupload_21269899249413678soGBD.jpg%22&type=nf340_228',
        },
      ],
      comments: [
        {
          user: {
            nickname: '흰둥이',
          },
          content: '멍멍!',
        },
        {
          user: {
            nickname: '옆집 뽀삐',
          },
          content: '왈왈!',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: '더미데이터',
  user: {
    id: 1,
    nickname: '누렁이',
  },
  images: [],
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
