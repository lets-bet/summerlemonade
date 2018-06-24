/* global document */
import ReactDOM from 'react-dom';
import App from './App';

require('./index.html');

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
