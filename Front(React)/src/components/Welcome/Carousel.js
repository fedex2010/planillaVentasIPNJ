//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Swiper from 'react-id-swiper';

import MercadoLibreItem from "./MercadoLibreItem"
import FravegaItem from "./FravegaItem"
import ColorShopItem from "./ColorShopItem"
import SodimacItem from "./SodimacItem"
import CombustibleItem from "./CombustibleItem"

const useStyles = makeStyles( theme => ({
  boxItem: {
    height:250, 
    width: "100% !important",
    color: "#fd7e14",
    display:"flex",
    flexDirection:"row"
  },
  item:{
    height:210, 
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    boxSizing: "border-box"
  },
  item1:{
    paddingLeft:102,
    flexDirection: "column"
  },
  item2:{
    paddingRight:102,
    flexDirection: "column"
  }
  
}))

const Carousel = () => {
    const classes = useStyles();
   
    const params = {
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
        <Swiper {...params} >
          <MercadoLibreItem boxItem={classes.boxItem} item={classes.item} item1={classes.item1} item2={classes.item2}/>
        </Swiper>
    )
  };
    
export default Carousel;