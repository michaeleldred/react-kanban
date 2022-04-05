import { useState } from "react";

export const AddCardButton: React.FunctionComponent<AddCardButtonProps> = props => {
    const [isCreating, setIsCreating] = useState<Boolean>(false);

    const checkForOnEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && e.shiftKey === false) {
            setIsCreating(false);
            e.preventDefault()
        }
    }

    if(isCreating) {
        return (
            <div className="card">
                <textarea onKeyDown={checkForOnEnter}/>
            </div>
        )
    } else {
        return (
            <button className="card" onClick={() => {setIsCreating(true)}}>+</button>
        );
    }
}

export type AddCardButtonProps = {
}