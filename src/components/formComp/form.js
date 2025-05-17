"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export function Form() {
  const validation = () => {
    const { firstName, lastName, email, phone, message } = formInfo;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      alert("Please enter information.");
      return false;
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   alert("Please enter a valid email address.");
    //   return false;
    // }

    const phoneRegex = /^[0-9\s+()-]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [finish, setFinish] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) return;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ikhanobasunnyking@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formInfo),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setFinish(true);
        setFormInfo({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Information sent successfully!");
      } else {
        toast.error("Something went wrong. All information required.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit the form.");
    }
  };

  return (
    <>
      <div className="sm:flex-col md:flex-row lg:flex xl:flex items-center justify-center gap-50">
        {/* Contact Info Section */}
        <div className="flex flex-col sm:items-start items-center justify-start gap-7 px-4">
          <div className="sm:flex md:flex-row lg:flex md:items-center items-center md:justify-start justify-center md:text-start text-center gap-2">
            <hr className="md:w-[30%] w-[50%]border-t-3 border-yellow-700" />
            <h2 className="text-2xl w-[300px] font-stretch-ultra-expanded md:pt-0 pt-3">
              Contact US
            </h2>
          </div>

          <p className="text-3xl font-bold w-[400px] md:text-start text-center leading-12">
            Hit us up and Let’s get cracking!
          </p>

          {/* Email Info */}
          <div className="sm:flex md:flex-row lg:flex md:items-center items-center md:justify-center justify-center gap-4 ">
            <div className="md:px-0 px-10">
              <div className="clip-triangle w-[60px] h-[50px] bg-yellow-700 flex items-center justify-center py-4">
                <Mail className="pt-1 hover:text-black" />
              </div>
            </div>

            <div className="flex-col md:text-start text-center md:justify-start justify-center py-2">
              <p className="pb-0.5">Email Address</p>
              <p>events@ballazz.co</p>
            </div>
          </div>

          {/* Phone Info */}
          <div className="sm:flex md:flex-row lg:flex gap-4">
            <div className="md:px-0 px-10">
              <div className="clip-triangle w-[60px] h-[50px] bg-yellow-700 flex items-center justify-center py-4">
                <Phone className="pt-1 hover:text-black" />
              </div>
            </div>

            <div className="flex-col md:text-start text-center justify-start py-2">
              <p className="pb-0.5">Call Us</p>
              <p>+91 9112211492</p>
            </div>
          </div>

          {/* Address Info */}
          <div className="sm:flex md:flex-row lg:flex gap-4">
            <div className="md:px-0 px-22">
              <div className="clip-triangle w-[60px] h-[50px] bg-yellow-700 flex items-center justify-center py-4">
                <MapPin className="pt-1 hover:text-black" />
              </div>
            </div>

            <div className="flex-col md:text-start text-center justify-start py-2">
              <p className="pb-0.5">Address</p>
              <p>Konibaje - 234 Rd, 234, +234</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-row items-center justify-center w-[480px] md:w-[680px] h-[80vh] bg-[#1a0f20]">
          {finish ? (
            <div className="text-white text-2xl font-semibold">
              Thank you for your message!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:items-start items-center justify-start md:gap-7 gap-4 px-4 mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <input
                  className="w-[300px] md:h-[60px] h-[60px] bg-[#402c45] rounded-lg px-4 border-none outline-none"
                  type="text"
                  name="firstName"
                  value={formInfo.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  className="w-[300px] md:h-[60px] h-[60px] bg-[#402c45] rounded-lg px-4 border-none outline-none"
                  type="text"
                  name="lastName"
                  value={formInfo.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <input
                  className="w-[300px] md:h-[60px] h-[60px] bg-[#402c45] rounded-lg px-4 border-none outline-none"
                  type="email"
                  name="email"
                  value={formInfo.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  className="w-[300px] md:h-[60px] h-[60px] bg-[#402c45] rounded-lg px-4 border-none outline-none"
                  type="text"
                  name="phone"
                  value={formInfo.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>

              <div className="md:w-[610px] w-[310px] h-[200px] md:h-[200px] bg-[#402c45] rounded-lg">
                <textarea
                  className="w-full h-full resize-none border-none outline-none px-4 py-3 bg-transparent text-white placeholder-white"
                  name="message"
                  value={formInfo.message}
                  onChange={handleChange}
                  placeholder="Hit a Message"
                />
              </div>

              <button
                type="submit"
                className="md:w-[610px] w-[310px] md:h-[70px] h-[50px] bg-[#682677] rounded-lg text-white font-semibold"
              >
                Reserve Now
              </button>
            </form>
          )}
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Form;
