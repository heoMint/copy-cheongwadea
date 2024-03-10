import styled from 'styled-components';

const RightArea = () => {
    return (
        <RightAreaWrapper>
            <ParaWrapper>
                <Title>尹 대통령, '대한민국 관문도시, 세계로 뻗어가는 인천'을 주제로 열여덟 번째 민생토론회 개최</Title>
                <Paragraph>
                    · 윤석열 대통령, '대한민국 관문도시, 세계로 뻗어가는 인천'을 주제로 열여덟 번째 민생토론회 개최 -
                    인천공항, 4단계 확장 연내 완료, 배후에 첨단복합 항공단지 조성 - - 인천 신항, 완전 자동화 및 배후단지
                    내 수출 특화공간 조성 - - '제물포 르네상스', '인천 골든하버' 프로젝트 및 경인선 철도·고속도로
                    지하화를 통한 인천 원도심 대개조 - - GTX-B·D·E, 인천발 KTX 등 초연결 광역교통망 구축 - - 대통령,
                    GTX-B 착공 기념식 참석 - 윤석열 대통령은 오늘(3. 7, 목) 오전 인천시청에서 ‘대한민국 관문도시, 세계로
                    뻗어가는 인천’을 주제로 열여덟 번째 ｢국민과 함께하는 민생토론회｣를 개최하여, 그간 항공과 해운을 통해
                    대한민국이 세계로 나아가는 관문 역할을 해 온 인천이 우리 항공·해운·물류산업의 전진기지로서 새롭게
                    도약하기 위한 방안을 논의했습니다.
                </Paragraph>
                <DatePara>2024.03.04</DatePara>
            </ParaWrapper>
            <div className="pt-7">
                <Title>"인천의 바다, 하늘, 땅 모두를 바꿔놓겠습니다"</Title>
                <div className="flex flex-wrap gap-2">
                    <Button>모두 발언</Button>
                    <Button>마무리 발언</Button>
                    <Button>SHOPTS</Button>
                </div>
            </div>
        </RightAreaWrapper>
    );
};

export default RightArea;

const RightAreaWrapper = styled.div`
    padding: 0 0 90px 55px;
`;
const ParaWrapper = styled.div`
    border-bottom: 1px solid #d5d5d5;
`;
const Title = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`;
const Paragraph = styled.p`
    font-size: 1.18rem;
    font-weight: 300;
    line-height: 1.8rem;
    overflow: hidden;
    display: -webkit-box; //  2번째 줄 까지 보여지며 2번째 줄 마지막에 말줄임표가 생성
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
const DatePara = styled.p`
    color: gray;
    font-size: 1.18rem;
    font-weight: 300;
    margin-bottom: 8px;
`;

const Button = styled.button`
    width: 180px;
    height: 50px;
    border-radius: 30px;
    background-color: #00205c;
    color: white;
`;
