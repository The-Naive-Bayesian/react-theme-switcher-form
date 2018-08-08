import * as React from 'react';
import './App.css';
import Card from "./components/card";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <main>
                    <Card>
                        Content
                    </Card>
                </main>
            </div>
        );
    }
}

export default App;
