import React from "react";
import {AlternativeAffairType} from "./HW2";

export type AlternativeAffairsType = {
    alternativeAffairsDefault: Array<AlternativeAffairType>
    changeFilterAlternative: (value: "all" | "high" | "middle" | "low") => void
    removeAlternativeAffairs: (affairId: number) => void
}

function AlternativeAffairs(props: AlternativeAffairsType) {
    return (
        <div>
            <h3>AlternativeAffairs</h3>
            {props.alternativeAffairsDefault.map(a => <li
                    key={a._id}>
                    <span>{a.name}</span>
                    <button onClick={() => {
                        props.removeAlternativeAffairs(a._id)
                    }}>del
                    </button>
                    <button>edit</button>
                </li>
            )}
            <div>
                <button onClick={() => {
                    props.changeFilterAlternative("all")
                }}>all
                </button>
                <button onClick={() => {
                    props.changeFilterAlternative("high")
                }}>high
                </button>
                <button onClick={() => {
                    props.changeFilterAlternative("middle")
                }}>middle
                </button>
                <button onClick={() => {
                    props.changeFilterAlternative("low")
                }}>low
                </button>
            </div>
        </div>
    );
}

export default AlternativeAffairs;
