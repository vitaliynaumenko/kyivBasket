'use client'
import {createContext, useState} from "react";

type TeamType = 'Чоловіча' | 'Жіноча'


interface TeamTypeContextProps  {
    team: TeamType,
    setType: (type:TeamType)=>void
}

export const TeamContext = createContext<TeamTypeContextProps>({ team: "Чоловіча",
    setType: () => {},})


export const TeamProvider = ({children}:{children:React.ReactNode})=>{

    const [team, setType]= useState<TeamType>('Чоловіча');


    return(
        <TeamContext.Provider value={{ team, setType }}>
            {children}
        </TeamContext.Provider>
    )
}