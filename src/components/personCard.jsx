import React from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personAge: this.props.age,
        };
    }

    plusOneAge = () => {
        let plusOne = this.state.personAge+1;
        this.setState({personAge: plusOne});
    }

    render () {
        let { name, lastName, hairColor } = this.props;
        return (
            <div className="container">
                <h1>{ lastName }, { name }</h1>
                <p>Age: { this.state.personAge }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ this.plusOneAge }>Birthday Button for { name } { lastName }</button>
            </div>
        );
    }
}

export default PersonCard;