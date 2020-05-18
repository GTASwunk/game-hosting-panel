import React from 'react';
import ReactDOM from 'react-dom';
import CreationConfigurer from "./components/configurerv2/CreationConfigurer";

const mappings = {
    'creation-configurer': CreationConfigurer,
};

for (const [dataReact, Component] of Object.entries(mappings)) {
    let selector = `[data-react="${dataReact}"]`;
    let elements = document.querySelectorAll(selector);

    console.log(`Found ${elements.length} elements with selector ${selector}`);

    for (let element of elements) {
        const data = {};

        for (const attr of element.attributes) {
            let name = attr.name.replace(/^data-/gi, '');
            data[name] = attr.value;
        }

        console.log(`Rendering component with: ${Object.keys(data).map(k => 'data-'.concat(k)).join(',')}`);

        ReactDOM.render(<Component {...data} />, element);
    }
}

(function () {
    'use strict';
    feather.replace();
}());
