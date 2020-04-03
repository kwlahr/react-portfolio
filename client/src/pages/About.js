import React from "react";
import AboutCard from "../components/AboutCard";
import StackCard from "../components/StackCard";

export default function About() {
  return (
    <div style={{ paddingBottom: "100vh" }}>
      <AboutCard />
      <StackCard />
    </div>
  );
}
