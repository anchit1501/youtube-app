import React from 'react';
import ReactDom,{render} from 'react-dom';

const App=()=>{
    return <div>Hello</div>;
}

ReactDom.render(<App />,document.querySelector('.container'));