import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    // 'App'はReactのコンポーネント名で、
    // <App />はReactのコンポーネント
    <App />,
    // public/index.htmlのid属性がrootのとこにレンダリング
    document.getElementById('root')
    );
