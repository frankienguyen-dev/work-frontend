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
    register(name, rules);
  }, [register, name, rules]);

  const handleChange = (editorState: string[]) => {
    const tagsObjects = editorState.map((tag) => ({ name: tag }));
    setValue(name, tagsObjects);
    setInputTag(tagsObjects);
  };
  // console.log('input tag: ', inputTag);
  /*
  * Implementing functionalities for adding and updating jobs,
  * displaying a job list, and searching for jobs.
  * Declare an interface for the returned response and write functions to call APIs for searching,
  * creating, updating, getting all jobs, and getting a job by its ID.
 
  * */
  return (
    <div>
      <TagsInput
        value={
          skillsFormServer
            ? skillsFormServer.map((tag: any) => tag.name)
            : inputTag.map((tag) => tag.name)
        }
        onChange={handleChange}
        placeHolder='Job skills'
      />
    </div>
  );
};

export default TagInputComponent;
