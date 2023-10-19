import React from "react";
import Team from "../components/team/Team";
import TeamHeader from "../components/team/TeamHeader";
import TeamHeroPictures from "../components/team/TeamHeroPictures";
import TeamCTA from "../components/team/TeamCTA";

export default function TeamPage() {
  return (
    <>
      <div className="w-[1050px] mx-auto">
        <TeamHeader />
      </div>
      <TeamHeroPictures />
      <div className="w-[1050px] mx-auto">
        <Team />
        <TeamCTA />
      </div>
    </>
  );
}
