import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

import SRD from "storm-react-diagrams";
class Storm extends Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        const styles = require('./less/Storm.less');
    }

    componentWillReceiveProps(nextProps) {
    }


    render() {
        //1) setup the diagram engine
        var engine = new SRD.DiagramEngine();
        engine.registerNodeFactory(new SRD.DefaultNodeFactory());
        engine.registerLinkFactory(new SRD.DefaultLinkFactory());


        //2) setup the diagram model
        var model = new SRD.DiagramModel();

        //3-A) create a default node
        var node1 = new SRD.DefaultNodeModel("Node 1","rgb(0,192,255)");
        var port1 = node1.addPort(new SRD.DefaultPortModel(false,"out-1","Out"));
        node1.x = 100;
        node1.y = 100;

        //3-B) create another default node
        var node2 = new SRD.DefaultNodeModel("Node 2","rgb(192,255,0)");
        var port2 = node2.addPort(new SRD.DefaultPortModel(true,"in-1","IN"));
        node2.x = 400;
        node2.y = 100;

        //3-C) link the 2 nodes together
        var link1 = new SRD.LinkModel();
        link1.setSourcePort(port1);
        link1.setTargetPort(port2);

        //4) add the models to the root graph
        model.addNode(node1);
        model.addNode(node2);
        model.addLink(link1);

        //5) load model into engine
        engine.setDiagramModel(model);

        //6) render the diagram!
        return (
            <div id="storm">
                <h1>React graph Storm</h1>
                {React.createElement(SRD.DiagramWidget,{diagramEngine: engine})}
            </div>
        )
    }
}

export default Storm;
