import { useState } from 'react';
import { styled } from 'styled-components';

import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';

interface IntroBarProps {
    spanWidth: number;
}
interface AreaDtProps {
    id: number;
    content: string;
}
const contentArea: AreaDtProps[] = [
    {
        id: 1,
        content: '"인천 시민들의 삶을 완전히 바꿔놓을 GTX-B, 대통령이 직접 챙길 것"',
    },
    {
        id: 2,
        content: '"인천의 바다, 하늘, 땅 모두를 바꿔놓겠습니다"',
    },
    {
        id: 3,
        content: '"전공의 이탈로 비상의료체계 가동하는 현실은 비정상적"',
    },
];
const MainTitle = () => {
    const [spanWidth, setSpanWidth] = useState<number>(4.7);
    const [currentId, setCurrentId] = useState(1);

    const handleClickPrevious = () => {
        if (currentId > 1) {
            setCurrentId(currentId - 1);
        }
    };

    const handleClickNext = () => {
        if (currentId < contentArea.length) {
            setCurrentId(currentId + 1);
        }
    };

    const onClickRightHandler = () => { // 오른쪽으로 그래프 바 확장
       
        setSpanWidth((prevWidth) => {
            const newWidth = prevWidth + 4.7;
            const maxWidthPx = 370;
           
            const newWidthPx = newWidth * 16; 
            if (newWidthPx > maxWidthPx) {
                return maxWidthPx / 16; 
            }
            return newWidth;
        });
         handleClickPrevious();
    };
    const onClickLeftHandler = () => {
        setSpanWidth((prevWidth) => {
            const newWidth = prevWidth - 4.8;
            const minWidthPx = newWidth * 16;

            const newWidthPx = newWidth * 16; 
            if (newWidthPx < minWidthPx) {
                return 370;
            }
            return newWidth;
        });
        handleClickNext();
    };

    return (
        <Section>
            <Content>
                <div className="textArea">
                    <MainTex className="animate-intro relative h-24 w-[50rem]">
                        {contentArea.find((area) => area.id === currentId)?.content}
                    </MainTex>
                </div>
                <IntroBarWrapper className="flex items-center  pt-16 relative justify-between">
                    <p className="intro-bar border-b border-indigo-10 mr-7 w-[370px]">
                        <IntroBar spanWidth={spanWidth}></IntroBar>
                    </p>
                    <ButtonWrapper className="buttonBox mr-5">
                        <button onClick={onClickLeftHandler}>
                            <PiArrowLeftThin className="size-8  hover:text-beige transition" />
                        </button>
                    </ButtonWrapper>
                    <ButtonWrapper className="buttonBox">
                        <button onClick={onClickRightHandler}>
                            <PiArrowRightThin className="size-8 hover:text-beige transition" />
                        </button>
                    </ButtonWrapper>
                </IntroBarWrapper>
            </Content>
            <div>
                <div>
                    <IntroImg className=" delay-300 ">
                        <img
                            className="animate-fadeIn opacity-1"
                            src="https://www.president.go.kr/images/2024/03/ANPbZz075qRA65e901bc9384a6.66704715.jpg"
                            alt=""
                        />
                        <span className="hidden">의사 집단행동 중앙내잔안전대책본부 회의중인 윤석열 대통령</span>
                    </IntroImg>
                </div>
            </div>
        </Section>
    );
};

export default MainTitle;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 42px;
    padding-top: 40px;
    margin-top: 120px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border: 1px solid;
    border-radius: 50%;
    &:hover {
        border-color: #af8e65;
        transition: 500ms ease;
    }
`;
const IntroBarWrapper = styled.div``;

const IntroBar = styled.span<IntroBarProps>`
    content: '';
    position: absolute;
    left: 0;
    margin-top: -4px;
    width: ${(props) => props.spanWidth}rem;
    height: 5px;
    transition: all 0.2s ease-in-out;
    transition-duration: 300ms;
    background-color: #af8e65;
`;

const Content = styled.article`
    display: flex;
    justify-content: space-between;
`;

const IntroImg = styled.div`
    position: relative;
    top: 50px;
    border-radius: 30px 30px 0px 0px;
    img {
        border-radius: 30px 30px 0px 0px;
    }
`;

const MainTex = styled.p`
    font-weight: 600;
    font-size: 2.95rem;
`;
