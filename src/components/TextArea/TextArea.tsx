import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import './TextArea.css';
import { RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Props {
  placeholder: string;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}

export default function TextArea({
  placeholder,
  name,
  errorMessage,
  setValue,
  register,
  rules
}: Props) {
  const [value, setValueState] = useState('');

  useEffect(() => {
    register(name, rules);
  }, [register, name, rules]);

  const onEditorStateChange = (editorState: string) => {
    setValue(name, editorState);
    setValueState(editorState);
  };

  return (
    <div>
      <ReactQuill
        placeholder={placeholder}
        theme='snow'
        value={value}
        onChange={onEditorStateChange}
      />

      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600 dark:text-red-500'>
        <span className='font-medium'>{errorMessage}</span>
      </div>
    </div>
  );
}
