import React from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';

interface Props {
}

interface State {
    isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
    /**
     * 接收参数
     * P: props 组件外数据传递 只能接收数据
     * S: state 组件内数据传递
     * SS: 自定义数据
     */
    constructor(props: Props) {
        super(props);
        // state 初始化
        this.state = {
            isOpen: false
        };
    }

    // event 类型 通过onClick ctrl查看
    handleCartCLick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        /**
         * event.target 事件发生元素
         * event.currentTarget 事件处理绑定元素
         */
        // 只接收按钮中 span 点击事件
        if ((event.target as HTMLElement).nodeName === 'SPAN') {
            // 设置状态 api
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    };

    render() {
        const cartDropDown = {
            display: this.state.isOpen ? 'block' : 'none'
        };
        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.button}
                    onClick={this.handleCartCLick}
                >
                    <FiShoppingCart />
                    <span>购物车 2 (件)</span>
                </button>
                <div className={styles.cartDropDown} style={cartDropDown}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
