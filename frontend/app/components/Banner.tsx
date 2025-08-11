'use client'

import SwiperSlider from "@/app/components/SwiperSlider";
import {Navigation} from "swiper/modules";

import '../styles/banner.scss'
import {getPosts, IPost} from "@/app/api/api";
import {useContext, useEffect, useState} from "react";
import {TeamContext} from "@/app/context/context";


export default function Banner() {

    const {team} = useContext(TeamContext)

    console.log('team',team);

    const [sliderData, setSliderData] = useState<IPost[]>([])


    useEffect(() => {
        if (!team) return;

        const getAllPosts = async () => {
            try {
                const data = await getPosts(team)
                setSliderData(data)
            } catch (e) {
                throw new Error(`Fetch request error: ${e as Error}`)
            }
        }
        getAllPosts()
    }, [team]);


    return (

        <section className="section section__slider--banner">
            <SwiperSlider
                optionModules={[Navigation]}
                items={sliderData}
                renderItems={(item, index) => {
                    const imgUrl: string = item?.attributes?.Image.data[0].attributes.url

                    return (
                        <div className="slider__wr bg__img"
                             style={{backgroundImage: `url(http://localhost:1337${imgUrl})`}}>
                            <div className="slider__content">
                                <div className="slider__content--wr">
                                    <h3 className="slider__content--title">{item.attributes.title}</h3>
                                    <a href="" className="slider__content--link">Докладніше
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10"
                                             fill="none">
                                            <path d="M1 1.5L4.5 5L1 8.5" stroke="#FADC4D" strokeWidth="1.5"
                                                  strokeLinecap="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }}
                sliderPreview={1}
                pagination={true}
                loop={true}
            />
        </section>
    )
}