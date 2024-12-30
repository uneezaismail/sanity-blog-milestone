import React from "react";
import HeroSection from "../components/HeroSection";
import SubscriptionCard from "@/components/SubscriptionCard";
import Posts from "./posts/page";


export default function Home() {
 
  return (
    <div className="max-w-6xl mx-auto my-5 md:my-10">    
    <HeroSection/>
  <Posts/>
   <SubscriptionCard/>  
    </div>
  );
};

