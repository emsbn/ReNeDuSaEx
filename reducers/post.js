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
            'https://cafeptthumb-phinf.pstatic.net/MjAyMDExMTJfMTY5/MDAxNjA1MTQyNzI2MjA2.V-R25xtwSDdP3BX5WhHOjkpGBEoTnx1L9bSCLX-Ign8g.x44gQ9qQwQRd5aRSVfqHmWRSAXhW_b2N8TBfz1y8U14g.PNG/image.png',
        },
        {
          src:
            'https://cafeptthumb-phinf.pstatic.net/MjAyMDExMTJfMTU2/MDAxNjA1MTQxMTg2MTAx.uMI-5YYsEXFKHtjvRimvwNaEq6HHHi5I64iMw2ZcVh8g.cGVGD1jBs6krrYQ4kWXeL4uvqNkpQrUV-U1sRR7v_2Ig.GIF/d293a8554ca022ea2e2fe68759a64ab3f7dd36b3.gif',
        },
        {
          src:
            'https://cafeptthumb-phinf.pstatic.net/MjAyMDExMTJfMTky/MDAxNjA1MTQwOTYyODU5.fvRgMSIicn6FcPjaI_7taXJHSjLaaXYYOtC2bVRmwrog.nAblq86FKJxMEyTETjGQoQ9IEOrjraqZSvcsXMoysgcg.GIF/776dd6e194d9034f634d6809c678131e4757861a.gif',
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
