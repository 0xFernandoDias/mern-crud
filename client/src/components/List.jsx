import React from 'react'
import "./List.css"

const List = ({ array, upd, del, showList }) => {
        if (showList === true) {
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
                                                        <i className="fas fa-user-edit" type="button" onClick={() => upd(e._id)} />
                                                        <i className="fas fa-user-minus" type="button" onClick={() => del(e._id)} style={{ color: "#4d0000" }} />
                                                </div>
                                        )}
                                </div>
                        </div>
                )
        } else { return (<div />) }
}

export default List