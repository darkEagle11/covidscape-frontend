import React from 'react'
import GatsbyImage from 'gatsby-image';
import AspectRatio from '../aspectRatio/aspectRatio';
import classes from './productCard.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BsHeart } from 'react-icons/bs';

const productCard = ({ image, type = 'product', ...props }) => {
    let cardInfo = null;

    const productClasses = `${classes.Product} ${props.styleClass}`;
    const imgClasses = `${classes.ProductImg} ${props.imageStyle}`;
    if (type === 'category') {
        const categoryInfo = (
            <div className={`${classes.CategoryDetails} ${classes.CardDetails}`}>
                <p className={classes.CategoryItems}>{props.items} products</p>
                <h3 className={classes.CategoryTitle}><span className={classes.CategoryTitleText}>{props.title || 'Category'}</span></h3>
            </div>
        );

        cardInfo = categoryInfo;
    }
    else {
        const productInfo = (
            <div className={`${classes.ProductDetails} ${classes.CardDetails}`}>
                <p className={classes.ProductTitle}>{props.title || 'Product'}</p>
                <h3 className={classes.ProductPrice}>{props.price ? `$${props.price}` : 'Price May Vary'}</h3>
            </div>
        );
        cardInfo = productInfo;
    }

    const productBtns = (
        <div className={classes.ProductBtns}>
            <button className={classes.ProductBtn}><AiOutlineEye /></button>
            <button className={classes.ProductBtn}><RiShoppingCart2Line /></button>
            <button className={classes.ProductBtn}><BsHeart /></button>
        </div>
    )


    return (
        <div className={productClasses}>
            <AspectRatio height="133%" styleClass={props.imgContainerStyle}>
                <GatsbyImage fluid={image} className={imgClasses}></GatsbyImage>
                <div className={`${classes.ProductOverlay} ${props.overlayStyle ? props.overlayStyle : null}`}></div>
                {type === 'product' ? productBtns : null}
            </AspectRatio>

            {cardInfo}

        </div>
    )
}

export default productCard
