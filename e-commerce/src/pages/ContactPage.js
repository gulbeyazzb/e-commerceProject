import React from "react";
import ContactHeader from "../components/Contact/ContactHeader";
import Contact from "../components/Contact/Contact";
import ContactCTA from "../components/Contact/ContactCTA";
const ContactPage = () => {
  return (
    <div className=" w-[1000px] m-auto">
      <ContactHeader />
      <Contact />
      <ContactCTA />
    </div>
  );
};
export default ContactPage;
