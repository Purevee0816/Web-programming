import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', 
                 window.cs142models.statesModel());
    this.state={
      states: window.cs142models.statesModel(),
      filterBy: "",
      found: false
    };
    this.handleChangeBound = event => this.handleChange(event);
  }
    handleChange(event){
      this.setState({filterBy:event.target.value})
    };

  render() {
    let found;
    for (let i = 0; i < this.state.statesArray.length; i++) {
      if (
        this.state.statesArray[i]
          .toUpperCase()
          .includes(this.state.filterBy.toUpperCase())
      ) {
        found = true;
        break;
      } else {
        found = false;
      }
    }
  
    return (
      <div>
        <span className="Searchp"> Search states by:</span>
        <input
        className="inputsearch"
          id="inId"
          type="text"
          value={this.state.filterBy}
          onChange={this.handleChangeBound}
        />
        <ul> {this.state.filterBy} </ul>
        <ul>
          {this.state.statesArray.map(currState => {
            return (
              currState
                .toUpperCase()
                .includes(this.state.filterBy.toUpperCase()) && (
                <li key={currState} className="cs142-states-state">
                  {" "}
                  {currState}{" "}
                </li>
              )
            );
          })}
          {!found && <li> No states found </li>}
        </ul>
      </div>
    );
  }
}

export default States;
