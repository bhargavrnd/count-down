import React from 'react';

export interface ListItem{
	itemName: string;
	itemDate: any;
}

const CountDownList: React.FC = (props) => {
  


const timeToGo = (eventDate: string)=>{
  let eventD = new Date(eventDate);
  let currentD = new Date();

  let diff = eventD.getTime() - currentD.getTime();
  let days = parseInt(diff/(24*3600*1000));
  let weeks = parseInt(days/7);

  let months =  (eventD.getMonth() + eventD.getFullYear() - 
    (currentD.getMonth() + currentD.getFullYear()));

  return `${months} Months ${weeks} weeks ${days} days` ;
}


  const fetchList = (listItems: Array<listItem>)=>{

  	return props.listItems.map((item:ListItem)=>{
  		return (<li className='event'>
  					<p>
						<span>Event: {item.itemName}</span><br/>
					  <span>Time to go: {timeToGo(item.itemDate)} </span>  		
  					</p>
				</li>);
  	})
  }

  return (

    <div className="countDownList">
    List of Events
      <ul>
      	{fetchList(props.listItems)}
      </ul>
    </div>
  );
}

export default CountDownList;
