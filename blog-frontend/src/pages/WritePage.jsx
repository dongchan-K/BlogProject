import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import WriteButton from '../components/write/WriteButton';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteButton />
    </Responsive>
  );
};

export default WritePage;
