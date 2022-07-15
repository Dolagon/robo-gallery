import React from 'react';
import './App.module.css';
import logo from './assets/images/logo.svg';
// 引入组件
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';
// 引入并设置为局部样式
import styles from './App.module.css';

interface Props {
}

interface State {
    robotGallery: any[];
}

class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            robotGallery: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({
                robotGallery: data
            });
        });
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo" />
                    <h1>萝卜</h1>
                </div>
                <ShoppingCart />
                <div className={styles.robotList}>
                    {/* 循环组件 */}
                    {this.state.robotGallery.map((r, index) => <Robot id={r.id} name={r.name} email={r.email} key={index} />)}
                </div>
            </div>
        );
    }
}

export default App;
