import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

interface Props {
  placeholder: string;
}

export default function TextArea({ placeholder }: Props) {
  const [value, setValue] = useState('');
  return <ReactQuill placeholder={placeholder} theme='snow' value={value} onChange={setValue} />;
}
