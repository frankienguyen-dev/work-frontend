import { useEffect, useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import './TagInputComponent.css';
import { RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  name: string;
  setValue: UseFormSetValue<any>;
}

const TagInputComponent = ({ register, rules, name, setValue }: Props) => {
  const [inputTag, setInputTag] = useState<{ name: string }[]>([]);
  useEffect(() => {
    register(name, rules);
  }, [register, name, rules]);

  const handleChange = (editorState: string[]) => {
    const tagsObjects = editorState.map((tag) => ({ name: tag }));
    setValue(name, tagsObjects);
    setInputTag(tagsObjects);
  };
  console.log('input tag: ', inputTag);

  return (
    <div>
      <TagsInput
        value={inputTag.map((tag) => tag.name)}
        onChange={handleChange}
        placeHolder='Job skills'
      />
    </div>
  );
};

export default TagInputComponent;
