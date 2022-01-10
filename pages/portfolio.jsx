import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              I will be building up a portfolio in the course of this coding
              bootcamp. Watch this space
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/chitchat.png" className="portfolio-image" />

                <h4 className="portfolio-name"></h4>
                <div className="portfolio-category"></div>
              </div>
              <div className="portfolio-item">
                <img className="portfolio-image" />

                <h4 className="portfolio-name"></h4>
                <div className="portfolio-category"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
