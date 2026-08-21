import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router';
import './NotFound.css';

const { Title, Text } = Typography;

function NotFound() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <main className="not-found-page">
            <section className="not-found-container">
                <div className="not-found-code">
                    404
                </div>

                <Title
                    level={2}
                    className="not-found-title"
                >
                    페이지를 찾을 수 없습니다.
                </Title>

                <Text className="not-found-description">
                    요청하신 페이지가 존재하지 않거나
                    <br />
                    주소가 변경되었을 수 있습니다.
                </Text>

                <Button
                    type="primary"
                    className="not-found-button"
                    onClick={handleGoHome}
                >
                    홈으로 돌아가기
                </Button>
            </section>
        </main>
    );
}

export default NotFound;
