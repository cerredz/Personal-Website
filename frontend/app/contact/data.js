export const slidesData = () => [
  {
    question: "What Is Your Name? ✨",
    required: true,
    placeholders: ["First Name", "Last Name"],
    expanded_text_field: false,
    formName: "Name",
  },
  {
    question: "What Is Your Email Address? 📩",
    required: true,
    placeholders: ["Enter Email Address"],
    expanded_text_field: false,
    formName: "Email",
  },
  {
    question: "What Is Your Phone Number? 📱",
    required: false,
    placeholders: ["Enter Phone Number"],
    expanded_text_field: false,
    formName: "Phone Number",
  },
  {
    question: "What Company Do You Work For? 📍",
    required: false,
    placeholders: ["Enter Company Here"],
    expanded_text_field: false,
    formName: "Company",
  },
  {
    question: "What Did You Want To Tell Me? 📞",
    required: true,
    placeholders: ["Enter Message Here"],
    expanded_text_field: true,
    formName: "Message",
  },
];
