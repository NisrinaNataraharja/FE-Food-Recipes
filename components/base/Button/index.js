import React from 'react'
import style from './button.module.css'

function Button({ title, btn, color, onClick, type }) {
    return (
        <div>
            <button className={`${style[btn]} ${style[color]}`} onClick={onClick} type={type}>{title}</button>
        </div>
    )
}

export default Button