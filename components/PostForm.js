import React, { useCallback } from 'react';
import { Form, Input } from 'antd';

const PostForm = () => {
  const onSubmit = useCallback(() => {}, []);
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="짖어주세요!"></Input.TextArea>
    </Form>
  );
};

export default PostForm;
