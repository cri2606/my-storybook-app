import React, { useState } from 'react'

type ButtonProps = {
    label: string
    onClick: () => void
    disabled: boolean | null
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    const [Disabled, setDisabled] = useState(false)

    const handleClick = async () => {
        if (disabled === null) {
            setDisabled(true)
            setTimeout(() => {
                onClick()           
                setDisabled(false)
            }, 5000)
        } else if (!disabled) onClick()
    }
    const isDisabled = disabled === null ? Disabled : disabled
    return <button onClick={handleClick} disabled={isDisabled}>{label}</button>
}
