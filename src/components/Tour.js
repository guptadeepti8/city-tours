import React, { Component } from 'react';
import './Navbar.scss';
import './Tour.scss';
import '../App.scss';

class Tour extends Component {
	constructor(props){
		super(props);
		this.state={
			showInfo:false
		};
		
	}
	handleInfo=()=>
		{
			this.setState({showInfo:!this.state.showInfo});
		};
		
	
  render() {
	  //const {city,img,name,info}=this.props.tour
	 // const tour=this.props.tour;
	  //console.log(tour.img)
  const {removeTour}=this.props;
    return (
      <article className="tour">
	  
	   <div className="img-container">
	  <img src={this.props.tour.img} alt="" />
	   <span className="close-btn" onClick={()=>{removeTour(this.props.tour.id)}}>
	     <i className="fas fa-window-close" />
	   </span>
	   </div>
	    <div className="tour-info">
		<h3>{this.props.tour.city}</h3>
		<h4>{this.props.tour.name}</h4>
		<h5>info{" "}<span onClick={this.handleInfo}><i className="fas fa-caret-square-down" /></span></h5>
		
		{this.state.showInfo &&<p>{this.props.tour.info}</p>}
		
		
		</div>
	  
	  </article>
	  
	  
    );
  }
}

export default Tour;
