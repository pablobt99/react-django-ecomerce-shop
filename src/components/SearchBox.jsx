import React, {useState} from "react";
import { Button, Form, Row} from 'react-bootstrap'
import { useNavigate } from "react-router";
import { LinkContainer } from 'react-router-bootstrap'


function SearchBox(){
    
    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        if(keyword){
            navigate(`/?keyword=${keyword}`)
        }else{
            navigate(`/`)
        }
    }
    

    return (
        <Form onSubmit={submitHandler} className="d-flex">
            <Form.Control
                type="text"
                name='q'
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
            />
            
            <a href={`/?keyword=${keyword}`}><Button variant="outline-success">Search</Button></a>
        </Form>
    )
}

export default SearchBox