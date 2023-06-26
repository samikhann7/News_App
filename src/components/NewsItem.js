import React from 'react'
// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title, description, url, urli, author, date, source}=this.props;
//     return (
//       <div id="ni">
//         <div className="card">
//           <img src={urli} className="card-img-top" alt="..."/>
//             <div className="card-body">
//             <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger b">{source}</span>
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}</p>
//               <p className="card-text"><small className="text-muted">By {author?author:"unkown"} on {Date(date).slice(0,15)}</small></p>
//               <a href={url} target="_blank" className="btn btn-primary">Go to article</a>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }
const NewsItem=(props)=>{
  let {title, description, url, urli, author, date, source}=props;
  return (
    <div id="ni">
      <div className="card">
        <img src={urli} className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger b">{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unkown"} on {Date(date).slice(0,15)}</small></p>
            <a href={url} target="_blank" className="btn btn-primary">Go to article</a>
          </div>
      </div>
    </div>
  )

}



NewsItem.defaultProps={
  title:"myTitle",
  description:"myDescription",
}


export default NewsItem
