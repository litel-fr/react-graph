import React, {Component, PropTypes} from "react";
import Graph from 'react-graph-vis'

class Vis extends Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const styles = require('./less/Vis.less');
    }

    componentWillReceiveProps(nextProps) {
    }


    render() {

        let graph = {
            nodes: [
                {id: 1, label: 'Node 1', color: '#e04141'},
                {id: 2, label: 'Node 2', color: '#e09c41'},
                {id: 3, label: 'Node 3', color: '#e0df41'},
                {id: 4, label: 'Node 4', color: '#7be041'},
                {id: 5, label: 'Node 5', color: '#41e0c9'}
            ],
            edges: [
                {from: 1, to: 2},
                {from: 1, to: 3},
                {from: 2, to: 4},
                {from: 2, to: 5}
            ]
        };

        let options = {
            layout: {
                hierarchical: false
            },
            edges: {
                color: "#000000"
            }
        };

        let events = {
            select: function(event) {
                var { nodes, edges } = event;
                console.log("Selected nodes:");
                console.log(nodes);
                console.log("Selected edges:");
                console.log(edges);
            }
        }

        return (
            <div>
                <h1>React graph vis</h1>
                <Graph graph={graph} options={options} events={events}/>

            </div>
        )
    }
}

export default Vis;
