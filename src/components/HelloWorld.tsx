import * as React from 'react';

export interface HelloWorldProps {
    firstname: string;
    lastname: string;
}

export class HelloWorld extends React.Component<HelloWorldProps, any> {
    test() {
      console.log(R.join(', ')(['Doe','Joe']));
    }

    render() {
        return <h1>
            HELLO {this.props.firstname} {this.props.lastname}!
        </h1>
    }
}
