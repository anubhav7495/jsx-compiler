import React from 'react';
import '../css/app.scss';

class JsxCompiler extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* start writing your JSX here */',
      output: '',
      err: ''
    };
  }

  _update(e) {
    let code = e.target.value;
    try {
      let output = Babel.transform(code, { presets: ['es2015', 'react'] }).code;
      this.setState({
        output: output,
        err: ''
      });
    }
    catch (e) {
      this.setState({ err: e.message });
    }
  }

  render() {
    return (
      <div>
        <header>JSX Live Compiler</header>
        <div className="container">
          <div className="input-area">
            <textarea onChange={this._update.bind(this)}
                      defaultValue={this.state.input}
                      autoFocus/>
            <pre>{this.state.err}</pre>
          </div>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    )
  }
}

export default JsxCompiler;
