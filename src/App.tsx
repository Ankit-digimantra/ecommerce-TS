
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login.component';

interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        {/* <h1>
          Hello {name}
        </h1>
        <button type="button" className="btn btn-primary">
          This is a bootstrap button
        </button> */}
        <Login/>
      </>
    );
  }
}

export default hot(App);
