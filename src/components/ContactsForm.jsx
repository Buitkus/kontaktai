import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import {collection, addDoc} from "firebase/firestore"
import {db} from "../firebase"



const ContactsForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name === "") {
            alert("Blogas ivedimas")
        }
        
        if(email === "") {
            alert("Blogas ivedimas")
        }
        
        if(message === "") {
            alert("Blogas ivedimas")
        }

        try {
            const docRef = await addDoc(collection(db, "clientsReq"), {
                name: name,
                email: email,
                client_message: message,
                created: new Date()
            });
           console.log("Document written with ID: ", docRef.id)
        } catch(e) {
           console.error("Error adding document: ", e)
        }
        setName("")
        setEmail("")
        setMessage("")
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Vardas</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <InputGroup>
                    <InputGroup.Text>With textarea</InputGroup.Text>
                    <Form.Control 
                    as="textarea" 
                    aria-label="With textarea" 
                     value={message}
                     onChange={(e) => setMessage(e.target.value)} />
                </InputGroup>

                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )

}



export default ContactsForm