import React, { useEffect, useState } from 'react'
import Portfolio from './Portfolio'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  const [portfolios, setPortfolios] = useState({})
  useEffect(() => {
    const storedPortfolios = localStorage.getItem('portfolios')
    console.log(storedPortfolios)
    if (storedPortfolios) {
      setPortfolios(JSON.parse(storedPortfolios))
    }
  }, [localStorage])
  return (
    <div>
    <section id="about" className="about">
      <div className="container">
    <div id="about" className="about">   
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>Portfolios Collection</h3>
              <p>
                A platform where you can upload, manage and showcase all of your porfolios.
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
 

    <section id="portfolio" className="portfolio bg-grey">
      <div className="container">
        
        <div className="section-title">
          <h2>Portfolios</h2>
          <p>Check out the portfolios uploaded by our users</p>
        </div>
        <div className="row portfolio-container">  
        {console.log(typeof portfolios)}
        
        {/* {portfolios.map((portfolio, index) => (
          <Portfolio
            key={index}
            title={portfolio.title}
            description={portfolio.description}
          />
        ))} */}

{Object.values(portfolios).map((portfolio, index) => (
  <Portfolio
    key={index}
    title={portfolio.title}
    content={portfolio.content}
  />
         ))}
 
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home