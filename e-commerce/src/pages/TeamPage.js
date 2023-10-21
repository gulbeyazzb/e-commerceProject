import React from "react";
import Team from "../components/Team/Team";
import TeamHeader from "../components/Team/TeamHeader";
import TeamHeroPictures from "../components/Team/TeamHeroPictures";
import TeamCTA from "../components/Team/TeamCTA";

export default function TeamPage() {
  return (
    <>
      <TeamHeader />
      <TeamHeroPictures />
      <Team />
      <TeamCTA />
    </>
  );
}
