
import React from 'react'
import {IState as IProps} from '../App'


const AddMe: React.FC<IProps> = ({employee}) => {
    const renderList = (): JSX.Element[] => {
        return employee.map(em => {
            return (
                <div className="container">
                    <img className="img" src={em.url} />
                    <h2 className="name">{em.name}</h2>
                    <p className="age">Age: {em.age}</p>
                    <p className="note">Country: {em.country}</p>
                </div>
            )
        })
    }
    return (
        
            <div className="List">
                {renderList()}
            </div>
        
    )
}

export default AddMe