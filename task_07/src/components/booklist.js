import React, {useState, useEffect} from "react";
import axios from "axios";
import Book from "./book";

const BookList = () => {

    const [book, setBook] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/library/book/list")
        .then(resp=>{
            setBook(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    return(
        <div className="col-md-10 offset-md-1">
            <br/>
            <table className="table table-striped table-hover">
                <tr>
                    <th>Book Cover Image</th>
                    <th>Book Name</th>
                    <th>Authors</th>
                    <th>Publish Date</th>
                    <th>Edition</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
                {book.map((b)=>(
                    
                    <Book details={b}/>
                ))}
            </table>
        </div>
    );
    

}

export default BookList;