'use client'

import SwiperSlider from "@/app/components/SwiperSlider";
import {Navigation} from "swiper/modules";
import Image from "next/image";

import '../styles/gameSlider.scss'
import {useEffect, useState} from "react";
import {getGames} from "@/app/api/api";
import {IGame} from "@/app/types/types";

// const data = [
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//     {command_logo_1: '/logo.png', command_logo_2: '/dnipro.png', command_count_1: '99', command_count_2: '90'},
//
// ];

export default function SliderGame() {

    const [gameList, setGameList] = useState<IGame[]>([])

    const fetchGame = async () => {
        try {
            const data = await getGames(6)
            console.log(data);
            setGameList(data)
        } catch (e) {
            throw new Error(`Fetch request error: ${e as Error}`)
        }
    }
    useEffect(() => {
        fetchGame()
    }, []);


    return (
        <section className="section section__slider--game">
            <SwiperSlider
                optionModules={[Navigation]}
                items={gameList}
                renderItems={(item) => (
                    <div className="swiper-slide">
                        <div className="slide__container">
                            <div className="slide_img">
                                <Image src={`http://localhost:1337${item.attributes.Komanda.Logo.data.attributes.url}`}
                                       width={60} height={60} alt={''}/>
                                <span className='slide__statistic'>{item.attributes.Komanda.Statistics}</span>
                            </div>
                            <div className="slide__content">
                                {item.attributes.Feature_game ? (
                                <div className='slide__time'>
                                    {item.attributes.event_time}
                                </div>
                                ): (
                                <>
                                    <span className="slide__count-left">{item.attributes.Komanda.count}</span>
                                    <span className="slide__count-dot">-</span>
                                    <span className="slide__count-right">{item.attributes.Oponent.count}</span>
                                </>
                                )
                                }
                                <div className='slide__location'>{item.attributes.Event_location}</div>

                            </div>
                            <div className="slide_img">
                                <Image src={`http://localhost:1337${item.attributes.Oponent.Logo.data.attributes.url}`}
                                       width={60} height={60} alt={''}/>
                                <span className='slide__statistic'>{item.attributes.Oponent.Statistics}</span>
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