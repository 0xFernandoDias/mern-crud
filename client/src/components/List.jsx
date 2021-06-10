import React from 'react'
import "./List.css"

const List = ({ array }) => {
        return (
                array.map((e) =>
                        <div className="list">
                                <h2>Name: {e.name} - Age: {e.age}</h2>
                        </div>
                )
        )
}

export default List