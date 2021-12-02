import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps {
    employee: Props["employee"]
    setEmployee: React.Dispatch<React.SetStateAction<Props["employee"]>>
}

const AddForm: React.FC<IProps> = ({employee, setEmployee}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        country: "",
        img: ""
    })

    const handleChage = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = (): void => {
        setEmployee([
            ...employee,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                country: input.country
            }
        ])
        setInput({
            name: "",
            age: "",
            country: "",
            img: ""
        })
    }
 
    return (
        <div>
            <form className="form">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    className="input"
                    value={input.name}
                    onChange={handleChage}
                    required
                />
                <input 
                    type="text" 
                    name="age"
                    placeholder="Age"
                    className="input"
                    value={input.age}
                    onChange={handleChage}
                    required
                />
                <input 
                    type="text" 
                    name="img"
                    placeholder="Image Url"
                    className="input"
                    value={input.img}
                    onChange={handleChage}
                    required
                />
                <input 
                    type="text" 
                    name="country"
                    placeholder="Country"
                    className="input"
                    value={input.country}
                    onChange={handleChage}
                    required
                />
                <input
                    
                    value="Add Me"
                    onClick={handleClick}
                />
            </form>
        </div>
    )
}

export default AddForm