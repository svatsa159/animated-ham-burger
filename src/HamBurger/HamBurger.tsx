import React from "react";

import './HamBurger.css'
import {BurgerSolidBottom, BurgerSolidMiddle, BurgerSolidTop} from "../assets/images/burger-components";

interface HamBurgerProps {
    isOpen: boolean,
    onClick: Function;
    size: string;
    color: string;
}

const HamBurger: React.FC<HamBurgerProps> = ({onClick, isOpen,size,color}) => {
    return (
        <div style={{width: size, height: size}} onClick={() => {
            onClick()
        }} className={`flex flex-col justify-center items-center wrap cursor-pointer`}>
            <div style={{height: '6.25%'}}></div>
            <BurgerSolidTop className={`${isOpen?"burgerOpen":'burgerClose'}`} color={color} width={'87.5%'} height={'37.5%'}/>
            <div style={{height: '6.25%'}}></div>
            <BurgerSolidMiddle className={`${isOpen?"burgerOpenMiddle":'burgerCloseMiddle'}`} color={color} width={'87.5%'} height={'18.75%'}/>
            <div style={{height: '6.25%'}}></div>
            <BurgerSolidBottom color={color} width={'87.5%'} height={'18.75%'}/>
            <div style={{height: '6.25%'}}></div>
        </div>
    );
}

export default HamBurger;
