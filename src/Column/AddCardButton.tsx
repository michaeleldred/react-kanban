import React from "react";
import { useState } from "react";
import '../Card.css';

export const AddCardButton: React.FunctionComponent<AddCardButtonProps> = props => {
    const [isCreating, setIsCreating] = useState<Boolean>(false);

    const checkForOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && e.shiftKey === false) {
            setIsCreating(false);
            if(props.onSubmit) {
                props.onSubmit({
                    "title": e.currentTarget.value
                });
            }
            e.preventDefault()
        }
    }

    if(isCreating) {
        return (
            <div className="card">
                <input type="text" autoFocus onKeyDown={checkForOnEnter}  />
            </div>
        )
    } else {
        return (
            <div className="card">
                <button onClick={() => {setIsCreating(true)}}>+
                </button>
            </div>
        );
    }
}

export type AddCardButtonProps = {
    onSubmit?: Function
}