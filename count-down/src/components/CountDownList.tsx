import React from 'react';

export interface ListItem{
	itemName: string;
	itemDate: any;
}

const CountDownList: React.FC = (props) => {
  
  const fetchList = (listItems: Array<listItem>)=>{

  	return props.listItems.map((item:ListItem)=>{
  		return (<li>
  					<p>
						Event: {item.itemName}
						Time to go: {item.itemDate}		
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
