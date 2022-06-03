import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm(){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Tytuł'/>
                <Form.TextArea placeholder='Opis'/>
                <Form.Input placeholder='Kategoria'/>
                <Form.Input placeholder='Data'/>
                <Form.Input placeholder='Miasto'/>
                <Form.Input placeholder='Miejsce wydarzenia'/>
                <Button floatet='right' positive type='submit' content='Zatwierdź'/>
                <Button floatet='right' type='button' content='Anuluj'/>
            </Form>
        </Segment>
    )
}