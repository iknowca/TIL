import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#334155',
                    colorText: '#1f2937',
                    colorTextSecondary: '#6b7280',
                    colorBorder: '#dfe3e8',
                    colorBgContainer: '#ffffff',

                    borderRadius: 8,
                    controlHeight: 42,

                    fontFamily: `
                        Inter,
                        Pretendard,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        sans-serif
                    `,
                },

                components: {
                    Button: {
                        primaryShadow: 'none',
                        fontWeight: 500,
                    },

                    Input: {
                        activeShadow: '0 0 0 2px rgba(51, 65, 85, 0.08)',
                        hoverBorderColor: '#94a3b8',
                        activeBorderColor: '#64748b',
                    },
                },
            }}
        >
            <App />
        </ConfigProvider>
    </StrictMode>,
);
