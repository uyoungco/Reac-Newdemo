import React from 'react';
import {Card, Tooltip } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//使用 react-router
export default class PCNewsImageBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    }
  };
  componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
	};
	render() {
    const styleImage = {
      display: "block",
      width: this.props.imageWidth,
      height: "90px"
    };
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
        <div key={index} className="imageblock">
          <Router>
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            <Tooltip placement="top" title={newsItem.title}>
              <div className="custom-image">
                <img style={styleImage} src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
              </div>
              <div className="custom-card">
                <h3 style={styleH3}>{newsItem.title}</h3>
                <p style={styleH3}>{newsItem.author_name}</p>
              </div>
              </Tooltip>
            </Link>
          </Router>
        </div>
			))
			: '没有加载到任何新闻';
		return (
			<div className="topNewsList">
				<Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
          {newsList}
				</Card>
			</div>
		);
	};
}
