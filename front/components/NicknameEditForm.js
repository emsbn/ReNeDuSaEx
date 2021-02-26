import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from 'antd';

import useInput from '../hooks/useInput';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || '');
  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px',
    }),
    [],
  );

  return (
    <Form style={style} onFinish={onSubmit}>
      <Input.Search
        value={nickname}
        onSearch={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
      />
    </Form>
  );
};

export default NicknameEditForm;
