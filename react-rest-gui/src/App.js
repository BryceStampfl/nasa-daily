import React from 'react';
import './App.css';
import Header from './components/header';
import DailyJumbo from './components/daily-jumbo';
import JsonService from './services/json-service';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.jsonService = new JsonService();

    this.state = {
      date: "",
      jsonData: ""
    };
  }


  loadJsonData() {
    this.jsonService.getData().then(data => {
      this.setState({ jsonData: data });
    })
  }

  componentDidMount() {
    this.loadJsonData();
  }

  render() {
      if (!this.state.jsonData){
        return <div />
      }

    return (
      <div className="App">
        <Header />
        <DailyJumbo data={this.state.jsonData} />
      </div>
    );
  }
}


export default App;