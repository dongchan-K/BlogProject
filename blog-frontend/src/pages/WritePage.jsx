import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/EditorContainer';
import TagBox from '../components/write/TagBox';
import WriteButton from '../components/write/WriteButton';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteButton />
    </Responsive>
  );
};

export default WritePage;
