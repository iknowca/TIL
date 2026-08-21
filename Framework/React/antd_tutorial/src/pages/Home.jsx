import { Button, Card, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router';
import './Home.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 나중에 토큰/세션 삭제 로직 추가
        navigate('/login');
    };

    const menus = [
        {
            key: 'users',
            title: '사용자 관리',
            description: '사용자 정보를 조회하고 관리합니다.',
        },
        {
            key: 'documents',
            title: '문서 관리',
            description: '등록된 문서를 조회하고 관리합니다.',
        },
        {
            key: 'settings',
            title: '환경 설정',
            description: '시스템 설정을 관리합니다.',
        },
    ];

    return (
        <Layout className="home-layout">
            <Header className="home-header">
                <div className="home-header-inner">
                    <div className="home-brand">
                        Your Company
                    </div>

                    <Button
                        type="text"
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        로그아웃
                    </Button>
                </div>
            </Header>

            <Content className="home-content">
                <div className="home-content-inner">
                    <section className="home-welcome">
                        <Title level={2}>
                            안녕하세요.
                        </Title>

                        <Text type="secondary">
                            시스템 메인 화면입니다.
                        </Text>
                    </section>

                    <section className="home-menu">
                        {menus.map((menu) => (
                            <Card
                                key={menu.key}
                                className="menu-card"
                                hoverable
                            >
                                <Title
                                    level={4}
                                    className="menu-title"
                                >
                                    {menu.title}
                                </Title>

                                <Text
                                    type="secondary"
                                    className="menu-description"
                                >
                                    {menu.description}
                                </Text>
                            </Card>
                        ))}
                    </section>
                </div>
            </Content>
        </Layout>
    );
}

export default Home;
