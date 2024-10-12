import NewsItem from "../Components/NewsItem";
import React, { Component } from 'react'


export default class News extends Component {
   
    constructor(){
        super();
        console.log("NewsItem constructor");
        this.state = {
        articles: [],
        loading: false,
        page: 1

    }
    }

   async  componentDidMount(){
        console.log("componentDidMount");
       let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd7fe79af2c14943ad45b97a735b41b4&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
       console.log(parsedData);
       this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
      }

      
      handlePrevClick= async ()=>{
        console.log("Prev")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd7fe79af2c14943ad45b97a735b41b4&page=${this.state.page-1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
       console.log(parsedData);
        this.setState({
          page: this.state.page -1,
          articles: parsedData.articles
        })
        
      } 
      
      handleNextClick= async ()=>{
        console.log("Next")
        if(this.state.page +1 > Math.ceil(this.state.totalArticles/20)){
          
        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd7fe79af2c14943ad45b97a735b41b4&page=${this.state.page+1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
       console.log(parsedData);
       
        this.setState({
          page: this.state.page +1,
          articles: parsedData.articles
        })
      } 
      }
     
      

    render() {
    return (


      <div className="container my-4">
        
        <h1 className="text-center">Dewako News Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return  <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,40):""} 
            description ={element.description?element.description.slice(0,90):""} 
            imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>

        })}
           
        </div>
        <div className="d-flex justify-content-between my-3 mx-3">
          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}


