import React from 'react';
import Timer from '../components/Timer'
import { Container, Row, Col } from 'react-bootstrap'

class TimerContainer extends React.Component {

  state = {
    timerIDs: []
  }

  // componentDidMount() {
  //   this.handleAddTimer()
  // }

  render() {

    return (
      <>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <Container>
        <Row className="justify-content-md-center">
        {this.renderTimers()}
        </Row>
        </Container>
        </>
    );
  }

  renderTimers = () => this.state.timerIDs.map(id => {
    return <Col lg={2}> <Timer key={id} id={id} removeTimer={this.removeTimer} /> </Col>
  })

  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default TimerContainer;