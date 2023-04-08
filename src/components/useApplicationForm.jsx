import { useNavigate } from "react-router-dom";
import {useState} from 'react'
const useApplicationForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
   const[localdata,setLocaldata]=useState([])
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirm_password } = data;
    let errors = {};
    if (!fullname.trim()) {
      errors.fullname = "Full Name is required";
    } else if (fullname.trim().length < 6) {
      errors.fullname = "Fullname should be at least 6 characters";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 6) {
      errors.password = "Password should be at least 6 characters";
    }
    if (!confirm_password.trim()) {
      errors.confirm_password = "Confirm Password is required";
    } else if (confirm_password !== password) {
      errors.confirm_password = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      console.log(data);
      alert("data added")
      localStorage.setItem("formValues",JSON.stringify([...localdata,data]))
      navigate("/login");
    } else {
      setErrors(errors);
    }
  };
  return { data, handleInput, handleSubmit, navigate, errors };
};

export default useApplicationForm;
