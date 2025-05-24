import React, { useState } from "react";

interface IToastObj {
  text: string;
  type: "success" | "error";
}
const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [toastObj, setToastObj] = useState<IToastObj>();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToastObj(undefined);
    try {
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

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Submission failed.");
      }
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setToastObj({ text: "Message sent successfully!", type: "success" });
    } catch (e: any) {
      setToastObj({
        text:
          e?.message ?? "Failed to send the message. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseToastMessage = () => {
    setToastObj(undefined);
  };

  return {
    formData,
    toastObj,
    loading,
    handleChange,
    handleSubmit,
    handleCloseToastMessage,
  };
};

export default useContactForm;
