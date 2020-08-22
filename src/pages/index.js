import React from 'react'
import Layout from '../components/layout/layout';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from '../components/productCard/productCard';


const query = graphql`
{
  file(relativePath: {eq: "covid-bg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`;


const Index = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div className="home">
        <BackgroundImage
          Tag="header"
          fluid={data.file.childImageSharp.fluid}
          preserveStackingContext={true}
          className="home-jumbotron">

          <article className="container">
            <h2>Staying safe,<br />doesn't mean staying dry </h2>
            <a className="link" href="#">Shop Now</a>
          </article>
        </BackgroundImage>

        <main>
          <section className="business-msg section-padding">
            <div className="business-msg__container container">
              <h2 className="business-msg__title">Show your style,<br /> and protect others</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dicta velit, beatae laborum voluptatem, atque aperiam sequi repellat fugit sunt iusto mollitia nobis voluptas! Libero minima dolorum optio nostrum suscipit!</p>
            </div>
          </section>

          <section className="section-padding">
            <div className="container">
              <div className="products">
                <ProductCard
                  image={data.file.childImageSharp.fluid}
                  type="category"
                  title="Masks"
                  items={10} />
                <ProductCard
                  image={data.file.childImageSharp.fluid}
                  title="Elphant Chair"
                  price={158} />
              </div>
            </div>



          </section>

        </main>
      </div>
    </Layout>
  )
}

export default Index
