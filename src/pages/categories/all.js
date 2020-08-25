import React from 'react'
import Layout from '../../components/layout/layout';
import StyledProductCard from '../../components/styledProductCard/styledProductCard';
import products from '../../constants/products';
import { graphql, useStaticQuery } from "gatsby";
import categories from '../../constants/categories';
import BackgroundImage from 'gatsby-background-image';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const query = graphql`

{
  file(relativePath: {eq: "washing-hands.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }

}
`;

const AllProducts = () => {
    const data = useStaticQuery(query);
    const Products = () => {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="products">
                        {products.map((product, index) =>
                            <StyledProductCard
                                key={`product-${index}`}
                                type="product"
                                title={product.title}
                                price={product.price}
                                image={data.file.childImageSharp.fluid} />
                        )}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <Layout>
            <BackgroundImage
                Tag="header"
                fluid={data.file.childImageSharp.fluid}
                preserveStackingContext={true}
                className="shop__jumbotron categories-dropdown">
                <div className="shop__jumbotron-content">
                    <div className="container">
                        <p className="shop__breadcrumb-list">Home / Categories / Shop</p>
                        <h1 className="shop__jumbotron-title">Shop</h1>
                        <button className="shop__jumbotron-categories-btn">Categories<span><IoIosArrowUp /></span></button>
                        <ul className="shop__jumbotron-categories-list">
                            {categories.map(category => <li><a href="#">{category.title}</a></li>)}
                        </ul>
                    </div>

                </div>

            </BackgroundImage>
            <Products />
        </Layout>
    )
}

export default AllProducts

