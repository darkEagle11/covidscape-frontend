import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from 'gatsby-image';
import AspectRatio from '../components/aspectRatio/aspectRatio';


export const query = graphql`
query GetProduct($slug: String){
    product: strapiProducts(slug: {eq: $slug}) {
      title
      strapiId
      price
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

const Product = ({ data }) => {
    const { title, strapiId, price, description, image } = data.product;
    return (
        <Layout>
            <main className="product-page">
                <div className="product-page-container">
                    <div className="product-info">
                        <div className="single-product__photos">
                            <AspectRatio height="125%">
                                <GatsbyImage fluid={image.childImageSharp.fluid} className="single-product__main-photo" />
                            </AspectRatio>
                        </div>

                        <div className="single-product__content">
                            <div className="single-product__content-container">
                                <h2 className="single-product__title">{title}</h2>
                                <p className="single-product__price"><span className="single-product__dollar-sign">$</span>{price}</p>

                                <p className="single-product__description">{description}</p>

                                <div className="single-product__item-quantity">
                                    <button className="item-quantity__change">-</button>
                                    <input type="text" name="quantity" value="11" min="1" class="item-quantity__num" pattern="[0-9]*" />
                                    <button className="item-quantity__change">+</button>
                                </div>
                                <button className="cart-btn">Add to cart</button>



                            </div>

                        </div>
                    </div>


                </div>
            </main>

        </Layout>
    )
}


export default Product
