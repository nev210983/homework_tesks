import React, { useState } from "react"
import AlternativeGreeting from "./AlternativeGreeting"
import {AlternativeGreetingType} from "./HW3";

type AlternativeGreetingContainer={
    usersData: Array<AlternativeGreetingType>
}

export default function AlternativeGreetingContainer(props: AlternativeGreetingContainer){
    const [nameAlternativeGreeting, setNameAlternativeGreeting] = useState<any>(""); // need to fix any
    return(
        <div>
            <AlternativeGreeting/>
        </div>
    )
}