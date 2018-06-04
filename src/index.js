import React from 'react';
import ReactDom,{render} from 'react-dom';

const API_KEY='AIzaSyCUferbQuY6fpLpG07OHmqaycL6orcY58s';

const App=()=>{
    return <div>Hello</div>;
}

ReactDom.render(<App />,document.querySelector('.container'));