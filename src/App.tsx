import * as React from 'react';
import './App.css';
import Card from "./components/card";
import Form from "./components/form";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <main>
                    <div className={'buffer'}/>
                    <Card styles={{margin: 'auto'}}>
                        <Form/>
                    </Card>
                    <div className={'buffer'}/>
                </main>
            </div>
        );
    }
}

export default App;
