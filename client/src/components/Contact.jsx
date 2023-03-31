import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { createOrder } from "../actions/orderActions";

const Contact = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const clear = () => {
    setOrderData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createOrder(orderData));
    clear();
    alert(
      "Your order has been submitted successfully! Expect a call or email form us soon :)"
    );
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={submitHandler}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={orderData.name}
              onChange={(e) => {
                setOrderData({ ...orderData, name: e.target.value });
              }}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={orderData.email}
              onChange={(e) => {
                setOrderData({ ...orderData, email: e.target.value });
              }}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Phone number
            </span>
            <input
              type="text"
              name="text"
              value={orderData.phone}
              onChange={(e) => {
                setOrderData({ ...orderData, phone: e.target.value });
              }}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={orderData.message}
              onChange={(e) => {
                setOrderData({ ...orderData, message: e.target.value });
              }}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
