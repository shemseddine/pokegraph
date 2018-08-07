import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
import App from './src/App';

const Index = () => {
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    );
};

ReactDOM.render(<Index />, document.getElementById("root"))