import { useLocalStorage } from './useLocalStorage';
// write your custom hook here to control your checkout form
export const useForm = (key, initialValue) => {

const [values, setValues] = useLocalStorage(key, initialValue);
const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage("success", false);
  const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    return [values, showSuccessMessage, handleChanges, handleSubmit]
  }
