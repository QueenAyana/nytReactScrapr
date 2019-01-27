import React from "react";
import { Card, CardHeader, CardBody } from 'reactstrap';
import "./Saved.css";

const Saved = (props) => {
  return(
    <Card className="card">
      <CardHeader><i className="fa fa-table"></i>Saved Articles</CardHeader>
      <CardBody>
        {props.savedArticles.map((article) => {
          return (
            <div key={article._id}>
              <div className="saved-article-display row">
                <a href={article.url} target="_blank">
                  <h4><strong>{article.title}</strong></h4>
                </a>
              </div>
              <div className="saved-article-display row">
                <p><strong>Saved Date: </strong> {article.date}</p>
              </div>
              <div className="saved-article-display row">
                <button onClick={() => props.deleteArticle(article._id)} className="btn btn-sm btn-danger btn-save col-md-2">Delete</button>
              </div>
              <hr/>
            </div> 
          )
        }) || <h4>loading...</h4>}
      </CardBody>
    </Card>
  )
};

export default Saved;