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
         <Label>Topic</Label>
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




            {/* <Row> 
               <Col size="sm-12">
                  <Card className="card">
                     <CardHeader><i className="fa fa-list-alt"></i>Search Parameters</CardHeader>
                     <CardBody>
                        <Form>
                           <Label>Topic:</Label>
                           <Input
                              type="text"
                              value={this.state.searchTopic}
                              onChange={this.handleInputChange}
                              name="search-topic"
                           />
                           <Label>Start Year:</Label>
                           <Input
                              type="text"
                              value={this.state.startYear}
                              onChange={this.handleInputChange}
                              name="start-year"
                           />
                           <Label>End Year:</Label>
                           <Input
                              type="text"
                              value={this.state.endYear}
                              onChange={this.handleInputChange}
                              name="end-year"
                           />
                           <FormBtn
                              // disabled=
                              type="submit"
                              onClick={this.handleFormSubmit}
                           >
                              <i className="fa fa-search"></i>
                              Search
                           </FormBtn>
                        </Form>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col size="sm-12">
                  <Card className="card">
                     <CardHeader><i className="fa fa-table"></i>Top Articles</CardHeader>
                        <CardBody>
                        {this.state.articles.length ? ( 
                           <List>
                              {this.state.articles.map(article => {
                                 return (
                                    <ListItem key={article._id}>
                                       <a href={"/articles/" + article._id}>
                                          
                                             {article.headline.main}
                                             {article.pub_date}
                                             {article.web_url}
                                          
                                       </a>
                                       <SaveBtn 
                                       // onClick{() => }
                                       />
                                    </ListItem>
                                 )
                              })}
                           </List>
                     ) : (
                        <h3>No results to display</h3>
                     )}
                     </CardBody>
                  </Card>
               </Col>
            </Row> */}
