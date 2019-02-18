import React, { Component } from 'react';

import Tour from './Tour';
import './Navbar.scss';
import './Tourlist.scss';
import '../App.scss';
import toursData from './TourData'

class TourList extends Component {
	constructor(props){
		super(props);
		this.state={
			tours:toursData
		}
	}
	removeTour=(id)=>{
		
		const {tours}=this.state;
		const sortedTours=tours.filter(tour=>tour.id!==id);
	  this.setState({tours:sortedTours})
	};
  render() {
	  
	  const {tours} =this.state;
    
	return (
      <section className="tourlist">
	  {tours.map(tour=>{
	  return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} /> })
	  
	  }
  </section>
    );
  }
}

export default TourList;
