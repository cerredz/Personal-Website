// update the contact form based on what question the user answers
export const updateFormData = (
  newValue,
  formData,
  setFormData,
  formName,
  index
) => {
  if (formName == "Name" && index == 0) {
    setFormData({
      ...formData,
      firstName: newValue,
    });
  } else if (formName == "Name" && index == 1) {
    setFormData({
      ...formData,
      lastName: newValue,
    });
  } else if (formName == "Email") {
    setFormData({
      ...formData,
      email: newValue,
    });
  } else if (formName == "Phone Number") {
    setFormData({
      ...formData,
      phoneNumber: newValue,
    });
  } else if (formName == "Company") {
    setFormData({
      ...formData,
      compnay: newValue,
    });
  } else if (formName == "Message") {
    setFormData({
      ...formData,
      message: newValue,
    });
  }
};

// make sure the user filled out the required fields
export const checkUserInput = (
  formData,
  setFormData,
  formName,
  setError,

  setStep,
  index
) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    (formName == "Name" &&
      (formData.firstName == "" || formData.lastName == "")) ||
    (formName == "Email" && !emailRegex.test(formData.email)) ||
    (formName == "Message" && formData.message == "")
  ) {
    // dispay error for 3 seconds
    setError(true);
    setTimeout(() => {
      setError(false);
    }, [3000]);
  } else {
    // no errors
    setStep((prev) => prev + 1);
  }
};
