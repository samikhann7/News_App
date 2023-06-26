// import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';



import React, { useEffect, useState } from 'react'
// export class News extends Component {
//   constructor() {
//     super();
//     this.state = {
//       article: [],
//       loading: false,
//       page: 1,
//       totalResults:0
//     }
//     document.title = `General-News Padhlo`
//   }
//   fetchMoreData=()=>{
//     this.setState({page:this.state.page+1})
//     fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=ae0f9319f30c480c9c64938595575355&page=${this.state.page}`).then((res) => res.json())
//     .then((json) => {
//       this.setState({
//         article: this.state.article.concat(json.articles),
//         loading: true,
//         totalResults:json.totalResults
//       });
//     })
//   document.title = `${this.props.cat.charAt(0).toUpperCase() + this.props.cat.slice(1)}-News Padhlo`
//   }
//   async componentDidMount() {
//     this.props.setProgress(5);
//     fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=ae0f9319f30c480c9c64938595575355&page=${this.state.page}`).then((res) => res.json())
//     .then((json) => {
//       this.props.setProgress(30);
//       this.setState({
//         article: json.articles,
//         loading: false,
//         totalResults:json.totalResults
//       });
//       this.props.setProgress(100);
//     })
//     document.title = `${this.props.cat.charAt(0).toUpperCase() + this.props.cat.slice(1)}-News Padhlo`
//   }
//   prev = () => {
//     console.log("Prev");
//     this.setState({
//       page: this.state.page - 1,
//       loading: false
//     })
//     this.componentDidMount()
//   }
//   next = () => {
//     if (this.state.page < 5) {

//       console.log("Next");
//       this.setState({
//         page: this.state.page + 1,
//         loading: true
//       })
//       this.componentDidMount()
//     }
//   }
//   render() {
//     return (
//       <>
//         <div>
//           {this.state.loading && <Spinner/>}
//         </div> 
//         <div className="row yo">
//           {!this.state.loading && this.state.article.map((element)=>{
//             return <div className="col-md-4" key={element.url}>
//               <NewsItem title={element.title} description={element.description} url={element.url} urli={element.urlToImage} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
//             </div>
//           })}
//         </div>
//         {/* <div> */}
//         {/* <InfiniteScroll
//           dataLength={this.state.article.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.article.length !==this.totalResults}
//           loader={<Spinner/>}>
//             <div className="row yo">
//           { this.state.article.map((element)=>{
//             return <div className="col-md-4" key={element.url}>
//               <NewsItem title={element.title} description={element.description} url={element.url} urli={element.urlToImage} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
//             </div>
//           })}
//           </div>
//         </InfiniteScroll>
//           </div> */}
//         <div className="d-flex justify-content-around">
//           <button disabled={this.state.page <= 1} type="button" onClick={this.prev} className="btn btn-warning">&larr; Previous</button>
//           <button type="button" disabled={this.state.page >= 6} className="btn btn-warning" onClick={this.next}>Next &rarr;</button>
//         </div>
//       </>
//     )
//   }
// }

const News=(props)=>{
  const[articles, setarticles]=useState([])
  const[loading, setloading]=useState(true)
  const[page, setpage]=useState(1)
  const[totalResults, settotalResults]=useState(0)
  document.title = `${props.cat.charAt(0).toUpperCase() + props.cat.slice(1)}-News`

  const componentDidMount=async ()=>{
    props.setProgress(5);
    fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=ae0f9319f30c480c9c64938595575355&page=${page}`).then((res) => res.json())
    .then((json) => {
      props.setProgress(30);
      setarticles(json.articles)
      setloading(false)
      settotalResults(json.totalResults)
      props.setProgress(100);
    })
    // document.title = `${this.props.cat.charAt(0).toUpperCase() + this.props.cat.slice(1)}-News Padhlo`
  
  }
  useEffect(()=>{
    componentDidMount()
  },[])
  const prev = () => {
    console.log("Prev");
    setpage(page-1)
    setloading(false)
    componentDidMount()
  }
  const next = () => {
    if (page < 5) {
      setloading(true)
      console.log("Next");
      componentDidMount()
      setpage(page+1)
    }
    else{
      setpage(0)
    }
  }
  return (
    <>
      <div>
        {loading && <Spinner/>}
      </div> 
      <div className="row yo">
        {!loading && articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} url={element.url} urli={element.urlToImage} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
      </div>
      <div className="d-flex justify-content-around">
        <button disabled={page <= 1} type="button" onClick={prev} className="btn btn-warning">&larr; Previous</button>
        <button type="button" disabled={page >= 6} className="btn btn-warning" onClick={next}>Next &rarr;</button>
      </div>
    </>
  )
}





News.defaultProps={
  country:'in',
  cat:'general'
}
// News.propTypes={
//   country: propTypes.string,
//   cat: propTypes.string
// }

export default News
