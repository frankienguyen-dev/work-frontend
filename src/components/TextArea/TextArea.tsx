import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function TextArea() {
  const [value, setValue] = useState('');
  return (
    <ReactQuill
      placeholder='Add your job description & responsibility'
      theme='snow'
      value={value}
      onChange={setValue}
    />
  );
}
