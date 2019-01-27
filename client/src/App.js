import React, { Component } from "react";
import { Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import API from "./utils/API";


class App extends Component {
   state = {
         search: "",
         start: "",
         end: "",
         result: [],
         savedArticles: []
   }

   componentDidMount() {
      this.loadArticles();
   };

   loadArticles = () => {
      API.getSavedArticles().then((res) => {
        this.setState({savedArticles: res.data});
      }).catch((err) => {
        console.log(err);
      });
   };

   deleteArticle = (id) => {
      API.deleteArticle(id).then((res) => {
        this.loadArticles()
      }).catch((err) => {
        console.log(err);
      });
   };
  
   handleSaveButton = (title, url, date, image) => {
      API.saveArticles({title, url, date, image}).then((res) => {
        this.loadArticles()
      }).catch((err) => {
        console.log(err);
      });
   };
  
   handleFormSubmit = (event) => {
      this.setState({search: ""});
      event.preventDefault();
   };
  
   handleInputChange = (event) => {
      this.setState({search: event.target.value});
   };
  
   handleButtonClick = () => {
      if (this.state.search !== "") {
        API.getData(this.state.search).then((res) => {
          this.setState({result: res.data.response.docs})
        }).catch((err) => {
          console.log(err);
        });
      }
   }

   render(){
      return (
         <Container fluid>
            <Jumbotron>
               <h1 className="text-center">
                  <strong>
                     <i className="fa fa-newspaper-o"></i>
                     New York Times Search
                  </strong>
               </h1>
             </Jumbotron> 
            <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} search={this.state.search}/>
            <Results result={this.state.result} handleSaveButton={this.handleSaveButton}/>
            <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
         </Container>
      )
   }
}


export default App;