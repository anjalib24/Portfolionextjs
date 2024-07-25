"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Skill from "./components/Skills";
export default function Home() {
  return (
    <main>
     <Hero/>  
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     
    
    </main>    
  );
}
