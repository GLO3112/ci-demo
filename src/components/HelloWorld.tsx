import * as React from 'react';

export interface HelloWorldProps {
    firstname: string;
    lastname: string;
}

export class HelloWorld extends React.Component<HelloWorldProps, any> {
    render() {
        return <h1>
            HELLOOOOOO {this.props.firstname} {this.props.lastname}!!!!!
        </h1>
    }
}