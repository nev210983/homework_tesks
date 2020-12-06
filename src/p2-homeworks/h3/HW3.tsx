import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import AlternativeGreetingContainer from "./AlternativeGreetingContainer";

// types
export type UserType = {
    _id: any // need to fix any
    name: any // need to fix any
}

export type AlternativeGreetingType = {
    id: number
    user: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]); // need to fix any

    const addUserCallback = (name: any) => { // need to fix any
        setUsers([]); // need to fix
    }

    // --- AlternativeGreeting ---

    const [usersAlternativeGreeting, setUsersAlternativeGreeting] = useState<Array<AlternativeGreetingType>>([
        {id: 1, user: "John"},
        {id: 2, user: "Sammy"},
        {id: 3, user: "Tanya"},
    ])

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreetingContainer
                usersData={usersAlternativeGreeting}/>
            <hr/>
        </div>
    );
}

export default HW3;
