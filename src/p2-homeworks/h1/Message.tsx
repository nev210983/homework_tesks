import React from "react";
import style from "./Message.module.css"

type messagePropTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropTypes) {
    return (
        <div className={style.messageWrapper}>
            <div className={style.avatarBox}>
                <img
                    className={style.avatar}
                    src={props.avatar}
                    alt=""
                />
            </div>
            <div className={style.messageBlock}>
                <div className={style.nameMessage}>
                    <span className={style.name}>{props.name}</span>
                    <p className={style.massage}>{props.message}</p>
                </div>
                <div className={style.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
