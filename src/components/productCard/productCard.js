import React from 'react'
import GatsbyImage from 'gatsby-image';
import AspectRatio from '../aspectRatio/aspectRatio';
import classes from './productCard.module.scss';


const productCard = ({ image, type, ...props }) => {
    let cardInfo = null;

    if (type == 'category') {
        const categoryInfo = (
            <div className={classes.CategoryDetails}>
                <p className={classes.CategoryItems}>{props.items} products</p>
                <h3 className={classes.CategoryTitle}>{props.title || 'Category'}</h3>
            </div>
        );

        cardInfo = categoryInfo;
    }
    else {
        const productInfo = (
            <div className={classes.ProductDetails}>
                <p className={classes.ProductTitle}>{props.title || 'Product'}</p>
                <h3 className={classes.ProductPrice}>{props.price ? `$${props.price}` : 'Price May Vary'}</h3>
            </div>
        );
        cardInfo = productInfo;
    }

    return (
        <div className={classes.Product}>
            <AspectRatio height="133%">
                <GatsbyImage fluid={image} className={classes.ProductImg}></GatsbyImage>
            </AspectRatio>

            {cardInfo}
        </div>
    )
}

export default productCard
