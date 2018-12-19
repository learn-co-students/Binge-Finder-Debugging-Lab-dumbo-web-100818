import React from 'react';

const TVShow = (props) => {
  return (

    <div>
      <br/>
      {console.log(props)}
      <img src={props.show.image.medium} onClick={props.selectShow} alt=""/>
    </div>
  );
}

export default TVShow;
