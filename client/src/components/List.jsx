import React from 'react'
import "./List.css"

const List = ({ array }) => {
        return (
                <div>
                        <h2> List of Friends: </h2>
                        <div className="container">
                        {array.map((e) =>
                                <div className="list">
                                        <span>
                                                <strong>Name: </strong> {` ${e.name}`}
                                        </span>
                                        <span>
                                                <strong>Age: </strong> {` ${e.age}`}
                                        </span>
                                        <i className="fas fa-user-edit" type="button" onClick="" />
                                        <i className="fas fa-user-minus" type="button" onClick="" style={{color: "#4d0000"}} />
                                </div>
                        )}
                        </div>
                </div>
        )
}

export default List