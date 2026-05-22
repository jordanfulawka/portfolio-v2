import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { GitHubActivity } from '@/lib/types';

export default async function Home() {
  const res = await fetch(`${process.env.PORTFOLIO_API_URL}/api/activity`);
  const data: GitHubActivity = await res.json();
  return (
    <>
      <Navbar />
      <Hero activity={data} />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
