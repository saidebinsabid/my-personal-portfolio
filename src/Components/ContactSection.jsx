// ContactSection.jsx
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import contactAnimation from "../assets/emailAnimation2.json";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import SoicalMedia from "./SoicalMedia";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs
      .send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        data,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(() => {
        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for contacting me. I will reply soon!",
          icon: "success",
        });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Message failed to send. Try again later.",
          icon: "error",
        });
      });
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="text-center">
        <h2 className="font-bold font-rajdhani mb-2 text-[#9F9F9F]">
          || Contact
        </h2>
        <p className="text-4xl font-rubik font-bold">Get in Touch</p>
      </div>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Side */}
        <div className="flex flex-1 flex-col items-center md:items-start text-center md:text-left my-auto">
          <Lottie
            animationData={contactAnimation}
            className="w-11/12 mx-auto my-auto md:w-md"
            loop
          />

          <div className="flex flex-wrap mx-auto justify-center mt-4 font-rubik">
            <div className="flex gap-2">
              <MdLocationOn className="text-[#f9004d] my-auto" />
              <p className="flex items-center gap-2">Dhaka, Bangladesh </p>
            </div>

            <div className="flex gap-2 ml-4">
              <MdWhatsapp className="text-[#f9004d] my-auto" />
              <p className="flex items-center gap-2">+8801876834853</p>
            </div>

            <div className="flex gap-2 ml-4">
              <MdEmail className="text-[#f9004d] my-auto" />
              <p className="flex items-center gap-2">ssaidebin1@gmail.com</p>
            </div>
          </div>

          <SoicalMedia></SoicalMedia>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-[#1e2125] p-5 rounded shadow-lg my-auto flex-1 font-rubik"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              {...register("subject", { required: "Subject is required" })}
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-md bg-[#2d2f36] text-white focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full border border-[#d80043] text-gray-400 hover:bg-[#d80043] transition duration-300 hover:text-white font-bold px-6 py-2 rounded-full font-rajdhani"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
