import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValue] = useState(initialValues);
  const [errors, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    // e.target도 객체라 객체 타입인지 확인하니까 안됐음
    const { name, value } = 
      e.target ? e.target :{ name: "group", value: e.value};
    setValue({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values.name, values.phone);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
      // 저장 후 토스트 띄우면 좋을듯
    }
    setError(newErrors);
    setIsLoading(false);
  };

  return{ values, errors, isLoading, handleChange, handleSubmit};
};

export default useForm;
