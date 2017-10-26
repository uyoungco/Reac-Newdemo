import React from 'react';
import {Card, Tooltip } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//使用 react-router
export default class PCNewsBlock extends React.Component {
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
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
          <Router>
					<Link to={`details/${newsItem.uniquekey}`} target="_blank">
            <Tooltip placement="right" title={newsItem.title}>
              <span>{newsItem.title}</span>
            </Tooltip>
					</Link>
            </Router>
				</li>
			))
			: '没有加载到任何新闻';
		return (
			<div className="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
		);
	};
}
