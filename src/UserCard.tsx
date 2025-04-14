import React, { useState } from 'react'
import { Button } from './Button'

type UserCardProps = {
    name: string
    email: string
    onConfirm: () => Promise<void>
}

export const UserCard: React.FC<UserCardProps> = ({name, email, onConfirm}) => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleConfirm = async () => {
        await onConfirm()
        setIsConfirmed(true)
    }

    return (
        <div style={{border: '1px solid #ccc', padding: '1rem'}}>
            <h3>{name}</h3>
            <p>{email}</p>
            <Button 
                label="Conferma" 
                onClick={handleConfirm}
                disabled={null} 
            />
            {isConfirmed && <p style={{color: 'green'}}>Utente confermato</p>}
        </div>
    );
}