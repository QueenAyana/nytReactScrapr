import React from "react";
import "./Results.css";
import Default from "./../../image/default.png"
import { Card, CardHeader, CardBody } from 'reactstrap';

const Results = (props) => {
  return (
    <Card className="card">
      <CardHeader><i className="fa fa-search"></i>Results</CardHeader>
      <CardBody>
        {props.result.map((article) => {
          const image = Default || `https://www.nytimes.com/${article.multimedia[0].url}`;
            return (
              <div key={article._id}>
                <div className="article-display row">
                  <a href={article.web_url} target="_blank" className="col-md-2"><img src={image} className="img-responsive" alt="thumbnail"/></a>
                  <div className="col-md-8">
                    <h4>{article.headline.main}</h4>
                  </div>
                  <button onClick={() => props.handleSaveButton(article.headline.main, article.web_url, article.pub_date, image)} className="btn btn-sm btn-dark col-md-2">Save</button>
                </div>
                <hr/>
              </div>
            )
        }) || <h4>loading...</h4>}
      </CardBody>
    </Card>
  )
};

export default Results