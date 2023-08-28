import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import Stopwatche from './stopwatch';
import './App.css';
import AlarmClock from './Alarm';
function Clock(){
    const update = ()=>{
    var now = new Date();
    var hours = now.getHours();//
    var ampm = "AM";

    if(hours<10){
        hours = '0' + hours;
    }
    else if(hours>=12 && hours <=23){
        ampm = "PM";
    }
    else if(hours>=0 && hours<12){
        ampm = "AM";
    }
    var minutes = now.getMinutes();
    if(minutes<10){
        minutes = '0' + minutes;
    }
    var seconds = now.getSeconds();
    if(seconds<10){
        seconds = '0' + seconds;
    }
    
    document.getElementById('time').textContent= hours + ":" + minutes + ":" + seconds + ampm;

    }
    setInterval(update);
    
    return (<>
        <div className='digital-clock w-100'>
            <div id="accordions">
            <Accordion defaultActiveKey="0" id="stop-watch-acc">
        <Accordion.Item eventKey="0" id="stop-watch-body">
            <Accordion.Header id='stop-watch-header'>Stop Watch</Accordion.Header>
                <Accordion.Body >
                    <Stopwatche/>
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <Accordion defaultActiveKey="0" id="stop-watch-acc">
        <Accordion.Item eventKey="0" id="stop-watch-body">
            <Accordion.Header id='stop-watch-header'>Alarm Clock</Accordion.Header>
                <Accordion.Body >
                    <AlarmClock/>
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>  
            </div>
            <div className='container' id='clock'>

            <Card className='shadow-lg  bg-body-tertiary z-5'>
      <Card.Body>
        <Card.Text>
         
          <h1 id='time'></h1>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
        </>
    );
}
export default Clock;