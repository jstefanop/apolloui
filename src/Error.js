import React, { Component } from 'react';

class ErrorBoundary extends Component {
 constructor(props) {
  super(props);
  this.state = { hasError: false };
}

static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  return { hasError: true, error: error };
}

componentDidCatch(error, info) {
  // log the error to our server with loglevel
  console.log('ERROR', { error, info });
}

render() {
 console.log(this.state);
 if (this.state.hasError) {
  // You can render any custom fallback UI
  return (
    <div className="app">
      <main className="main-error">
        <h2>Ops! Something went wrong.</h2>
        <h6>Check the error below and report it to the support team</h6>
        <div className="mt-4">
          <code>{this.state.error.message}</code>
        </div>
        <div className="mt-2">
          <code>{JSON.stringify(this.state.error.stack)}</code>
        </div>
        <div className="mt-4">Start over from the <a href="/miner">Dahsboard page</a></div>
      </main>
    </div>
  )
 }

 return this.props.children;
}
}

export default ErrorBoundary;