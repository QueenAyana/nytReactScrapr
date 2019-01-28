import React from "react";
import { Input, Button } from "../Form";
import { Card, CardHeader, CardBody, Form, Label } from 'reactstrap';
import "./Search.css";

const Search = (props) => {
  return (
   <Card className="card">
      <CardHeader><i className="fa fa-list-alt"></i>Search Parameters</CardHeader>
      <CardBody>
         <Form onSubmit={props.handleFormSubmit}>
         <Label className="label">Topic:</Label>
            <Input 
               handleInputChange={props.handleInputChange} 
               search={props.search}
            />
            <Button handleButtonClick={props.handleButtonClick}/>
         </Form>
      </CardBody>
   </Card>   
  )
};

export default Search;