import React from 'react';
import PageA from './pages/pageA/index.tsx';
import { createRoot } from 'react-dom/client';
import './styles/index.less'
// 渲染你的 React 组件

const root = createRoot(document.getElementById('app'));
root.render(<PageA/>);