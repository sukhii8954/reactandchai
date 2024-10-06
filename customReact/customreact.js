function customRender(reactElement, container){
    // const domelement = document.createElement
    // (reactElement.type)
    // domelement.innerHTML =reactElement.child

    /* THIS IS NOT  GOOD CODE IF HAVE MORE NO OF ATTRIBUTES 

    domelement.setAttribute('href', reactElement.props.href)
    domelement.setAttribute('target', reactElement.props.target)

    */

    // container.appendChild(domelement)


     const domElement =  document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.child
     for (const prop in reactElement.props) {  // iterating on props
        domElement.setAttribute(prop,reactElement.props[prop])
        //syntax:- domElement.setAttribute(key, value [key]);
     }
      container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    child : 'click me to visit google'
}

const maincontainer =document.querySelector('#root')

customRender(reactElement,maincontainer)