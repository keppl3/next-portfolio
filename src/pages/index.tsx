import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import Head from "next/head";

const Home = () => {
  const projects =[
    {
      slug: "natura-whitelabel",
      name: "natura whitelabel",
      image: {
        url:'https://avatars.githubusercontent.com/u/36538415?v=4'
      }
    }
  ]
  return (
    <>
      <Head>
        <title>Sobre Mim | Gustavo</title>
        <meta
          name="description"
          content="Sou um desenvolvedor front-end apaixonado por criar interfaces e ajudar outros devs!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-8 md:space-y-10 lg:space-y-12">
        <AboutMe />
        <Projects projects={projects}/>
      </div>
    </>
  );
};

export default Home;
