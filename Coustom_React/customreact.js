function customRender(reactElement, container) {
    // Create the DOM element based on reactElement's type
    const domElement = document.createElement(reactElement.type);
    
    // Set inner HTML
    domElement.innerHTML = reactElement.children;
    
    // Set attributes if they exist
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }

    // Append the created element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
