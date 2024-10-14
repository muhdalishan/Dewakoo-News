import React, { Component } from 'react';
import NewsItem from "../Components/NewsItem";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }



  constructor() {
    super();
    console.log("NewsItem constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0

    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd7fe79af2c14943ad45b97a735b41b4&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
  }


  handlePrevClick = async () => {
    console.log("Prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd7fe79af2c14943ad45b97a735b41b4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }

  handleNextClick = async () => {
    console.log("Next")


    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd7fe79af2c14943ad45b97a735b41b4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }



  render() {
    return (
      <div className="container my-4">
      <h2 className="text-center my-3" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal', color: '#212529' }}> Top Trending in USA</h2>
      <hr />
      <div className="row justify-content-center">
        {this.state.articles && this.state.articles.map((element) => (
        <div className="col-md-3" key={element.url} style={{ marginBottom: '20px' }}>
          <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
          <br />
        </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-3 mx-3">
        <button disabled={this.state.page <= 1} className="btn btn-dark mx-2" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}


