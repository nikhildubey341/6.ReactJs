import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function ImgCard(props) {
  
  const [Count, setCount] = useState(0);
  const handleClick = () => {
   console.log("Button Clicked");
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem', height: '15rem' }} variant="top" src={props.image} />
      <Card.Body>
        {props.id}
        <Card.Title>{props.title} {Count}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button onClick={()=> setCount(Count+1)} variant="primary">Go somewhere</Button>
        <br /><br />
        <Button onClick={handleClick}>Visit Here</Button>

      </Card.Body>
    </Card>
  );
}

export default ImgCard;
