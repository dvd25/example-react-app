import React from 'react';


class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);

        return (
            <div>
                <h1>CHECK OUT MY PROPS OBJECT</h1>
                <h2>{stringProps}</h2>
            </div>
        );
    }
}
// Pass a props named test to the component
// ReactDOM.render(<PropsDisplayer test={"hello"} />,
//     document.getElementById('app'))

export default PropsDisplayer;