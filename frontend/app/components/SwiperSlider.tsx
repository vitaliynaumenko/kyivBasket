'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import {SwiperModule} from "swiper/types";


type SwiperProps<T> = {
    items: T[],
    renderItems: (item:any, index: number)=>React.ReactNode,
    sliderPreview:number,
    spaceBetween?: number,
    navigation?:boolean,
    pagination?:boolean,
    optionModules: SwiperModule[],
    classes?:string
    loop?:boolean
    centeredSlides?:boolean
}

export default function SwiperSlider<T> ({items,renderItems,optionModules, spaceBetween, sliderPreview, pagination=false, navigation=false, loop, centeredSlides}:SwiperProps<T>) {

    return(
        <Swiper
            modules={optionModules}
            slidesPerView={sliderPreview}
            navigation={navigation}
            pagination={pagination}
            loop={loop}
            centeredSlides={centeredSlides}
        >
            {
                items.map((item, index)=>(
                    <SwiperSlide key={index}>{renderItems(item, index)}</SwiperSlide>
                ))
            }
        </Swiper>
    )

}