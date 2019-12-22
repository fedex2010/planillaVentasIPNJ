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
    flexDirection:"row",
    ["@media (max-width: 767px)"]: {
        height:350, 
        width: "100% !important",
        color: "#fd7e14",
        display:"flex",
        flexDirection:"column",
        alignItems: "center"
    }
  },
  item:{
    height:210, 
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    boxSizing: "border-box",
    ["@media (max-width: 767px)"]: {
        width:"75%",
        height:190, 
    }
  },
  item1:{
    paddingLeft:102,
    flexDirection: "column",
    ["@media (max-width: 767px)"]: {
      paddingLeft:0,
      height:"auto", 
    }
  },
  item2:{
    paddingRight:102,
    flexDirection: "column",
    ["@media (max-width: 767px)"]: {
      paddingRight:0
    }
  },
  containerItem:{
    width: "100%",
    height: 210
  },
  verticalHr: { 
    borderLeft: "1px solid #c3c3c3",
    backgroundColor: "#c3c3c3",
    width: 1,
    height: "190px !important",
    ["@media (max-width: 767px)"]: {
        width: 250,
        border:"1px solid #EFECED",
        height: "0.5px !important"  
    }
  }
  // swiper-pagination-bullet-active
  
}))

const Carousel = () => {
    const classes = useStyles();
   
    const params = {
      autoplay:true,
      loop: true,
      slidesPerView: 1,
      direction: 'horizontal',
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true, 
      },



      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }
    
    return (
      <Swiper {...params}>
        <div>
          <SodimacItem verticalHr={classes.verticalHr} boxItem={classes.boxItem} item={classes.item} item1={classes.item1} item2={classes.item2}/>
        </div>
        <div>
          <FravegaItem verticalHr={classes.verticalHr} boxItem={classes.boxItem} item={classes.item} item1={classes.item1} item2={classes.item2}/>
        </div>
        <div>
          <MercadoLibreItem verticalHr={classes.verticalHr} boxItem={classes.boxItem} item={classes.item} item1={classes.item1} item2={classes.item2}/>
        </div>
        <div>
          <CombustibleItem verticalHr={classes.verticalHr} boxItem={classes.boxItem} item={classes.item} item1={classes.item1} item2={classes.item2}/>
        </div>
        <div>
          <ColorShopItem verticalHr={classes.verticalHr} boxItem={classes.boxItem} item={classes.item} item1={classes.item1} item2={classes.item2}/>
        </div>
        
      </Swiper>
    )
  };
    
export default Carousel;