import React from 'react';
import Layout from '../components/layout/layout';
import categories from '../constants/categories';
import StyledProductCard from '../components/styledProductCard/styledProductCard';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
{
   file(relativePath: {eq: "gov-covid.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`;

const Categories = () => {
    const data = useStaticQuery(query);
    const Categories = () => {
        return (
            <div className="products">
                {categories.map((category, index) =>
                    <StyledProductCard
                        key={`category-${index}`}
                        type="category"
                        title={category.title}
                        items={category.items}
                        image={data.file.childImageSharp.fluid} />
                )}
            </div>
        )
    }
    return (
        <Layout>
            <header className="categories__jumbotron">
                <div className="categories__jumbotron-container">
                    <article className="categories__jumbotron-content">
                        <p className="categories__jumbotron-dest">Home / Categories</p>
                        <h1 className="categories__jumbotron-title">Categories</h1>
                    </article>
                </div>
            </header>

            <section className="categories-section">
                <div className="container">
                    <Categories />
                </div>
            </section>
        </Layout>
    )
}

export default Categories
