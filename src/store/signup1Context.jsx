import { createContext, useState, useEffect } from "react";

export const Signup1Context = createContext();

export function Signup1Provider({ children }) {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    ageBracket: "",
    gender: "",
    countryId: 0,
    // stateId: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isValid2, setIsValid2] = useState(false);

  // function handleChange(name, value) {
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: "" }));
  // }
  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validateStep1() {
    const err = {};
    if (!formData.userName.trim()) {
      err.userName = "Username is required";
    }
    if (!formData.firstName.trim()) {
      err.firstName = "firstname is required";
    }
    if (!formData.lastName.trim()) {
      err.lastName = "lastname is required";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      err.email = "Valid email is required";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 11) {
      err.phone = "Valid Phone number is required";
    }
    if (!formData.password.trim()) {
      err.password = "Password is required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }
  useEffect(() => {
    const valid = validateStep1();
    setIsValid(valid);
  }, [formData]);

  function validateStep2() {
    const err = {};
    if (
      !formData.ageBracket.trim() ||
      !formData.gender.trim() ||
      !formData.countryId.trim() ||
      // !formData.stateId.trim() ||
      !formData.terms
    ) {
      err.general = "All fields must be filled and terms ticked";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  useEffect(() => {
    setIsValid2(validateStep2());
  }, [formData]);
  return (
    <Signup1Context.Provider
      value={{
        formData,
        errors,
        handleChange,
        validateStep1,
        validateStep2,
        isValid,
        isValid2,
      }}
    >
      {children}
    </Signup1Context.Provider>
  );
}
