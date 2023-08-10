import React, { useRef } from 'react';
import { useUserStore } from 'store';
import useInput from 'hooks/useInput';
import usePost from 'hooks/usePost';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

const EditorBox = () => {
  const editorRef = useRef();
  //   console.log(editorRef.current);

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    setBody(data);
  };

  const html = '<h3> html 헤더 <span style="color:blue;">파란색</span></h3>';

  const currentUser = useUserStore((state) => state.currentUser);
  // console.log(currentUser);

  const [title, onChangeTitle, setTitle] = useInput();
  const [body, onChangeBody, setBody] = useInput();
  const [category, onChangeCategory, setCategory] = useInput();

  const { addMutation } = usePost();
  // console.log(addMutation);

  const handleSubmitPost = (e) => {
    e.preventDefault();

    const newPost = {
      userId: currentUser.uid,
      title,
      body,
      likes: [],
      category
    };

    addMutation.mutate(newPost);
    setTitle('');
    setBody('');
    setCategory('');
  };

  return (
    <div>
      <div style={{ width: '1000px', marginTop: '50px' }}>
        <form style={{ border: '2px solid black', margin: '10px', padding: '10px' }} onSubmit={handleSubmitPost}>
          <label>제목 : </label>
          <input type="text" placeholder="제목 입력" value={title} onChange={onChangeTitle} />
          <label>카테고리 : </label>
          <input type="text" placeholder="카테고리 입력" value={category} onChange={onChangeCategory} />
          <Editor
            initialValue={body}
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            hideModeSwitch="true"
            useCommandShortcut={false}
            usageStatistics={false}
            ref={editorRef}
            plugins={[colorSyntax]}
            language="ko-KR"
            onChange={onChange}
          />
          <button>등록</button>
        </form>
      </div>

      {/* <form style={{ border: '2px solid black', margin: '10px', padding: '10px' }} onSubmit={handleSubmitPost}>
  <label>제목 : </label>
  <input type="text" placeholder="제목 입력" value={title} onChange={onChangeTitle} />
  <label>내용 : </label>
  <input type="text" placeholder="내용 입력" value={body} onChange={onChangeBody} />
  <label>카테고리 : </label>
  <input type="text" placeholder="카테고리 입력" value={category} onChange={onChangeCategory} />
  <button>등록</button>
</form> */}
    </div>
  );
};

export default EditorBox;
