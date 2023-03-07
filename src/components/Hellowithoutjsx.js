import React from "react";

const HelloWithoutjsx = () => {
    return React.createElement('div',{id:'hello'}, React.createElement('h1',null,'Hello Krushal withoutjsx'))
}

export default HelloWithoutjsx