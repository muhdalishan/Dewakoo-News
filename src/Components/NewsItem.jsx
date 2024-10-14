import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ height: "24rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <img src={!imageUrl ? "https://photo2.tinhte.vn/data/attachment-files/2024/10/8479559_Robotaxi-87.jpg" : imageUrl} className="card-img-top" alt="..." style={{ width: "100%", height: "12rem", objectFit: "cover" }} />
          <div className="card-body" style={{ overflow: "hidden" }}>
            <h5 className="card-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</h5>
            <p className="card-text" style={{ height: "4rem", overflow: "hidden", textOverflow: "ellipsis" }}>{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
