import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I'm new to coding! Just getting started with the @UpLeveled Web
              Development Bootcamp in Vienna.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
