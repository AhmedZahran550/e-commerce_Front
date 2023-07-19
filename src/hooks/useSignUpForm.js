
import { useFormik } from 'formik';

export const useSignUpForm = () => {
  const initialValues = {
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  };
  const onSubmit = ()=>{
    console.log("done");
  }

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,onSubmit
  });

  return {
    handleChange,
    handleSubmit,
    onSubmit,
    values
  }
};
