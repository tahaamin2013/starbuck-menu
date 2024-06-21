// "use client";

// import React, { useState } from "react";
// import { Input } from "@/src/components/ui/input";
// import { Label } from "@/src/components/ui/label";
// import { Textarea } from "@/src/components/ui/textarea";
// import { Button } from "@/src/components/ui/button";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/SendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           //   message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
//           message: `${formData.message}`,
//         }),
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         const result = await response.json();
//         alert(`Failed to send message: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message. Please try again later.");
//     }
//   };

//   return (
//     <div className="mx-4 overflow-x-hidden">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full border max-w-md md:mx-auto bg-white my-5  p-5 md:p-6 rounded-lg shadow-lg"
//       >
//         <div className="mb-6">
//           <Label
//             htmlFor="name"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Name
//           </Label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <Label
//             htmlFor="email"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Email
//           </Label>
//           <Input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <Label
//             htmlFor="message"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Message
//           </Label>
//           <Textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></Textarea>
//         </div>
//         <Button type="submit" className="w-full text-white">
//           Send Message
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page