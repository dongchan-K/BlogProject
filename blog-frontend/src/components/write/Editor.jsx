import React, { useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../../components/common/Responsive';
import { useEffect } from 'react';

const EditorWrapper = styled(Responsive)`
  // 페이지 위아래 여백
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  // 내용 작성란 스타일링
  .ql-editor {
    padding: 1rem;
    min-height: 640px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const toolbarOptions = [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['blockquote', 'code-block', 'link', 'image'],
  ];

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: toolbarOptions,
      },
    });
  });

  return (
    <EditorWrapper>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorWrapper>
  );
};

export default Editor;
