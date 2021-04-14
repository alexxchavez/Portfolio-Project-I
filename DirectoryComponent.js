import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const directory = this.props.projects.map(projects =>{
            return (
                <div className="col">
                    <img src={projects.image} alt={projects.name} />
                    <h2>{projects.name}</h2>
                    <p>{projects.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;