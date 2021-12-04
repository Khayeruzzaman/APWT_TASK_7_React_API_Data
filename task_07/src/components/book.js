import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {

    const  {id, cover, name, authors, publishdate, edition, stock} = props.details;
    return(
        <tr key={id}>
            <td><img src={cover} alt="" /></td>
            <td>{name}</td>
            <td>{authors}</td>
            <td>{publishdate}</td>
            <td>{edition}</td>
            <td>{stock}</td>
            <td><Link to={"/booklist/"+name}><button className="btn btn-primary">Details</button></Link></td>
        </tr>
    );
}
export default Book;