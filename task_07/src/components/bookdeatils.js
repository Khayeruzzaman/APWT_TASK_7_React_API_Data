import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {

    const [detail, setDetail] = useState([]);
    const  {name} = useParams();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/library/book/name/"+name)
        .then(resp=>{
            setDetail(resp.data);
        }).catch(err=>{
            console.log(err);
        });
        
    },[name]);

    return(
        <div className="col-md-10 offset-md-1">
            <h1>Book Details</h1>
        {
            detail.map(
                d=>(
                    <div>
                        <img src={d.cover} alt="" />
                        <h3>{d.name}</h3> 
                        <p><b>Author Name:</b> {d.authors}</p>
                        <p><b>Published Date:</b> {d.publishdate}</p>
                        <p><b>Edition:</b> {d.edition}</p>
                        <p><b>Stock:</b> {d.stock}</p>
                        <br/>
                        <br/>
                         
                    </div>
                           
                )
            )
        }
             
        </div>
    );
}

export default BookDetails;