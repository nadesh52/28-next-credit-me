import React from "react";
import ProfileCard from "./components/ProfileCard";
import HomeCardList from "./components/HomeCardList";

const Home = async () => {
  return (
    <section className="space-y-4 pb-10 divide-y">
      <ProfileCard />
      <HomeCardList />
    </section>
  );
};

export default Home;
