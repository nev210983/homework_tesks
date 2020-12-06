import React, {useState} from "react";
import AlternativeAffairs from "./AlternativeAffairs";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}; // need to fix any
export type FilterType = "all" | AffairPriorityType;

// --- AlternativeAffairsType ---
export type AlternativeAffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AlternativeAffairType = {
    _id: number
    name: string
    priority: AlternativeFilterType
}; // need to fix any
export type AlternativeFilterType = "all" | AlternativeAffairPriorityType;


// pure helper functions
export const filterAffairs = (affairs: any, filter: any): any => { // need to fix any
    if (filter === "all") return affairs;
    else return; // need to fix
}
export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
    return; // need to fix
}

function HW2() {

    // constants
    const defaultAffairs: Array<AffairType> = [ // need to fix any
        {_id: 1, name: "React", priority: "high"},
        {_id: 2, name: "anime", priority: "low"},
        {_id: 3, name: "games", priority: "low"},
        {_id: 4, name: "work", priority: "high"},
        {_id: 5, name: "html & css", priority: "middle"},
    ];

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    // --- AlternativeAffairs ---

    const [alternativeAffairs, setAlternativeAffairs] = useState<Array<AlternativeAffairType>>([
        {_id: 1, name: "React", priority: "high"},
        {_id: 2, name: "anime", priority: "low"},
        {_id: 3, name: "games", priority: "low"},
        {_id: 4, name: "work", priority: "high"},
        {_id: 5, name: "html & css", priority: "middle"},
    ]);

    const [filterAlternative, setFilterAlternative] = useState<AlternativeFilterType>("all");

    let removeAlternativeAffairs = (_id: number) => {
        debugger
        let filteredAffair = alternativeAffairs.filter(a => a._id !== _id)
        setAlternativeAffairs(filteredAffair)
    }

    let affairsForTodoList = alternativeAffairs

    if (filterAlternative === "high") {
        affairsForTodoList = alternativeAffairs.filter(a => a.priority === "high")
    }
    if (filterAlternative === "middle") {
        affairsForTodoList = alternativeAffairs.filter(a => a.priority === "middle")
    }
    if (filterAlternative === "low") {
        affairsForTodoList = alternativeAffairs.filter(a => a.priority === "low")
    }

    const changeFilterAlternative = (value: "all" | "high" | "middle" | "low") => {
        setFilterAlternative(value)
    }
    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeAffairs
                alternativeAffairsDefault={affairsForTodoList}
                changeFilterAlternative={changeFilterAlternative}
                removeAlternativeAffairs={removeAlternativeAffairs}/>
            <hr/>
        </div>
    );
}

export default HW2;
