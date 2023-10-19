import React from "react";
import PricingHeader from "../components/pricing/PricingHeader";
import TeamCTA from "../components/team/TeamCTA";
import AboutClients from "../components/About/AboutClients";
import Pricing from "../components/pricing/Pricing";
import PricingFaq from "../components/pricing/PricingFaq";

export default function PricingPage() {
  return (
    <>
      <div className="w-[1050px] mx-auto">
        <PricingHeader />
      </div>
      <Pricing />
      <AboutClients />
      <div className="w-[1050px] mx-auto">
        <PricingFaq />
        <TeamCTA />
      </div>
    </>
  );
}
