import React from 'react';
class ApiResult extends React.Component {
  constructor() {
    this.state = {
       data : []
    }
  }

  componentDidMount() {
    this.getFunction();
  }

  getFunction = () => {
    this.ApiCall()
       .then(
           function(data){
             console.log(data);
             // set the state here
             this.setState({data:data});
           },
           function(error){
             console.log(error);
          }
   );
}


  ApiCall() {
    return $.ajax({
       url: 'http://ip:port/allstudents',      
       type: 'GET',
    }).fail((responseData) => {
        if (responseData.responseCode) {
            console.error(responseData.responseCode);
        }
    });
}

render() {
  return (
     <div>
       <button id='b1'
          style={{fontSize: 20, color: 'green'}}
          onClick={() => this.Getfunction()}>
       Get!
    </button>
    {/* Now render your data here using jsx if it is array iterate over it */}
   </div>
  );
}
}

export default ApiResult;


