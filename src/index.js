import React from 'react';
import ReactDOM from 'react-dom';
import cat from './cat.jpg';
import 'bulma/css/bulma.css';
import './index.css';

class ImgNb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: 0,
        };
        this.handlecount = this.handlecount.bind(this);
    }
    handlecount() {
        this.setState(prevState=>({click : prevState.click+1}));
    }
    render() {
        return (
            <div className='container'>
                 <img onClick={this.handlecount} src={cat} alt={'cat'}/>
                <p>number of click: {this.state.click}</p>
            </div>

        );
    }
}

const element = <ImgNb/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);

