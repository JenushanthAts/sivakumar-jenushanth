import React, { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Send JSON data
      },
      body: JSON.stringify({
        ...formData,
        access_key: import.meta.env.VITE_WEB3_KEY, // Use the environment key
      }),
    });
    const result = await response.json(); // Parse the response as JSON
    if (result.success) {
      //   setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    } else {
      alert("Failed to send the message. Please try again later.");
    }
  };
  console.log(import.meta.env.VITE_WEB3_KEY);
  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
