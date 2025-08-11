'use client'

import SwiperSlider from "@/app/components/SwiperSlider";
import {Navigation} from "swiper/modules";
import Image from "next/image";

import '../styles/gameSlider.scss'

const data = [
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
    {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},

];

export default function SliderGame() {


    return (
        <section className="section section__slider--game">
            <SwiperSlider
                optionModules={[Navigation]}
                items={data}
                renderItems={(item) => (
                    <div className="swiper-slide">
                        <div className="slide__container">
                            <div className="slide_img">
                                <Image src={item.command_logo_1} width={60} height={60} alt={''}/>
                            </div>
                            <div className="slide__content">
                                <span className="slide__count-left">{item.command_count_1}</span>
                                <span className="slide__count-dot">-</span>
                                <span className="slide__count-right">{item.command_count_2}</span>
                            </div>
                            <div className="slide__img">
                                <Image src={item.command_logo_2} width={60} height={60} alt={''}/>
                            </div>
                        </div>

                    </div>
                )}
                sliderPreview={3}
                navigation={true}
                centeredSlides={true}
                loop={true}
            />
        </section>
    )
}