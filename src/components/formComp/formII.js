"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export function FormII() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    zone: "",
    guestsRange: "",
  });

  const [finished, setFinished] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validated = () => {
    const newErrors = {};

    if (formDetails.email === "") newErrors.email = "Please enter email";
    if (formDetails.password === "") newErrors.password = "Please enter password";
    if (formDetails.zone === "") newErrors.zone = "Please choose zone";
    if (formDetails.guestsRange === "") newErrors.guestsRange = "Please choose guests range";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validated()) {
      toast.error("Please enter all required information!");
      return;
    }

    toast.loading("Sending...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/ikhanobasunnyking@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      if (!response.ok) throw new Error("Error encountered");

      toast.dismiss();
      toast.success("Information received!");
      setFormDetails({ email: "", password: "", zone: "", guestsRange: "" });
      setFinished(true);
      setError({});
    } catch (err) {
      toast.dismiss();
      toast.error("Submission error!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:gap-50 gap-15">
      <div className="flex flex-col items-center md:items-start justify-start gap-7 px-4 md:pt-0 pt-10">
        <h2 className="text-7xl w-[300px] font-stretch-ultra-expanded">
          Secure a Spot
        </h2>
        <p className="w-[350px] text-center md:text-left md:w-[500px] text-yellow-600">
          Choose from several table service arrangements including the entrance
          fee, liquor, separate cloakroom, separate lavatory and speed entrance.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center w-[400px] h-[100vh] bg-[#1a0f20] md:pt-0 pt-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-7 px-4 mx-auto"
        >
      
          <div className="flex flex-col w-[300px]">
            <input
              className="w-full md:h-[50px] h-[100px] px-4 bg-[#402c45] rounded-lg text-white md:text-lg text-2xl"
              type="text"
              name="email"
              placeholder="Email"
              value={formDetails.email}
              onChange={handleChange}
            />
            {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
          </div>

          <div className="flex flex-col w-[300px]">
            <input
              className="w-full md:h-[50px] h-[100px] px-4 bg-[#402c45] rounded-lg text-white md:text-lg text-2xl"
              type="password"
              name="password"
              placeholder="Password"
              value={formDetails.password}
              onChange={handleChange}
            />
            {error.password && <span className="text-red-500 text-sm">{error.password}</span>}
          </div>

          <label className="md:text-lg text-2xl text-[#d1c4e9]">Confirm Zone</label>
          <div className="flex flex-col w-[300px]">
            <select
              className="w-full md:h-[50px] h-[100px]  px-4 text-[#d1c4e9] md:text-lg text-2xl bg-[#402c45] rounded-lg"
              name="zone"
              value={formDetails.zone}
              onChange={handleChange}
            >
              <option value="" className="md:text-lg text-2xl">Choose Zone</option>
              <option value="zone I">Zone I</option>
              <option value="zone II">Zone II</option>
              <option value="zone III">Zone III</option>
            </select>
            {error.zone && <span className="text-red-500 text-sm">{error.zone}</span>}
          </div>

          <div className="flex flex-col w-[300px]">
            <select
              className="w-full md:h-[50px] h-[100px] px-4 text-[#d1c4e9] md:text-lg text-2xl bg-[#402c45] rounded-lg"
              name="guestsRange"
              value={formDetails.guestsRange}
              onChange={handleChange}
            >
              <option value="">Guests Range</option>
              <option value="1-2">1-2</option>
              <option value="3-8">3-8</option>
              <option value="other">Other</option>
            </select>
            {error.guestsRange && <span className="text-red-500 text-sm">{error.guestsRange}</span>}
          </div>

          <button
            type="submit"
            className="w-[300px] md:h-[50px] h-[100px] bg-[#682677] text-white md:text-lg text-2xl rounded-lg"
          >
            Reserve Now
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default FormII;