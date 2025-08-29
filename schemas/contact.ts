import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
  subject: yup.string().required("Subject is required").min(5, "Subject must be at least 5 characters"),
});
