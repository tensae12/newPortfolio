import Hero from "@/component/Hero";
import About from "@/component/About";
import Skills from "@/component/Skills";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tensae's Portfolio</title>
        <meta name="description" content="Tensae's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
