import { Button, Form, Input, Typography } from 'antd';
import './Login.css';
import {useNavigate} from "react-router";

const { Title, Text } = Typography;

function Login() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        navigate('/')
    };

    return (
        <main className="login-page">
            <section className="login-container">
                <div className="login-header">
                    <Title className="login-title" level={2}>
                        Welcome back
                    </Title>

                    <Text className="login-description">
                        계정 정보를 입력해 로그인하세요.
                    </Text>
                </div>

                <Form
                    className="login-form"
                    layout="vertical"
                    requiredMark={false}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="아이디"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '아이디를 입력해주세요.',
                            },
                        ]}
                    >
                        <Input
                            placeholder="아이디를 입력하세요"
                            autoComplete="username"
                        />
                    </Form.Item>

                    <Form.Item
                        label="비밀번호"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '비밀번호를 입력해주세요.',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="비밀번호를 입력하세요"
                            autoComplete="current-password"
                        />
                    </Form.Item>

                    <Button
                        className="login-button"
                        type="primary"
                        htmlType="submit"
                        block
                    >
                        로그인
                    </Button>
                </Form>
            </section>

            <footer className="login-footer">
                © 2026 Your Company
            </footer>
        </main>
    );
}

export default Login;
