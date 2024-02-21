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
  skillsFormServer: any;
}

const TagInputComponent = ({ register, rules, name, setValue, skillsFormServer }: Props) => {
  const [inputTag, setInputTag] = useState<{ name: string }[]>([]);
  useEffect(() => {
    if (skillsFormServer) {
      const tagsObjects = skillsFormServer.map((tag: any) => ({ name: tag.name }));
      setInputTag(tagsObjects);
      setValue(name, tagsObjects);
    }
    register(name, rules);
  }, [register, name, rules, skillsFormServer, setValue]);

  const handleChange = (editorState: string[]) => {
    const tagsObjects = editorState.map((tag) => ({ name: tag }));
    setValue(name, tagsObjects);
    setInputTag(tagsObjects);
  };
  return (
    <div>
      <TagsInput
        // value={
        //   skillsFormServer
        //     ? skillsFormServer.map((tag: any) => tag.name)
        //     : inputTag.map((tag) => tag.name)
        // }
        value={inputTag.map((tag) => tag.name)}
        onChange={handleChange}
        placeHolder='Job skills'
      />
    </div>
  );
};

export default TagInputComponent;
