import React from 'react';
import {Button} from 'antd';
import FilpCard from './flipCard';
import moment from 'moment';

export default class TimeCard extends React.Component {
  state = {
    time: '000000'
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: moment().format('HHmmss')
      })
    }, 1000);
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTimeClick() {
    this.setState({
      time: moment().format('HHmmss')
    });
  }

  render() {
    const {time} = this.state;
    let timeArray = time.split('');
    return (
      <React.Fragment>
        {
          timeArray.map((item, index) => {
            return <FilpCard data={item} key={index} />
          })
        }
        <div>
          <Button onClick={this.onTimeClick.bind(this)}>校正</Button>
        </div>
      </React.Fragment>
    )
  }
}