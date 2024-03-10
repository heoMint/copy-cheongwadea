import { useState } from 'react';
import { styled } from 'styled-components';

import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';

interface IntroBarProps {
    spanWidth: number;
}
const MainTitle = () => {
    const [spanWidth, setSpanWidth] = useState<number>(4.7);

    const onClickRightHandler = () => {
        // 값을 24rem 씩 늘리기 위해 현재 rem 값을 px로 변환한다고 가정하고 계산
        setSpanWidth((prevWidth) => {
            const newWidth = prevWidth + 4.7;
            const maxWidthPx = 370;
            // 최대 너비 확인
            const newWidthPx = newWidth * 16; // rem 값을 px로 변환
            if (newWidthPx > maxWidthPx) {
                // 최대 너비를 초과했다면 maxWidthPx에 맞춰서 rem으로 다시 계산
                return maxWidthPx / 16; // px 값을 rem으로 변환
            }

            // 최대 너비를 초과하지 않았을 경우, 업데이트된 width 반환
            return newWidth;
        });
    };
    const onClickLeftHandler = () => {
        // 값을 24rem 씩 늘리기 위해 현재 rem 값을 px로 변환한다고 가정하고 계산
        setSpanWidth((prevWidth) => {
            const newWidth = prevWidth - 4.8;
            const minWidthPx = newWidth * 16;
            // 최대 너비 확인
            const newWidthPx = newWidth * 16; // rem 값을 px로 변환
            if (newWidthPx < minWidthPx) {
                // 최소 너비를 초과했다면 maxWidthPx에 맞춰서 rem으로 다시 계산
                return 370; // px 값을 rem으로 변환
            }

            // 최대 너비를 초과하지 않았을 경우, 업데이트된 width 반환
            return newWidth;
        });
    };

    return (
        <Section>
            <Content>
                <div className="textArea">
                    <MainTex className="animate-intro">
                        "전공의 이탈로
                        <br />
                        비상의료체계 가동하는 현실은 비정상적"
                    </MainTex>
                </div>
                <IntroBarWrapper className="flex items-center relative justify-between">
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
    top: 100px;
    border-radius: 30px 30px 0px 0px;
    img {
        border-radius: 30px 30px 0px 0px;
    }
`;

const MainTex = styled.p`
    font-weight: 600;
    font-size: 2.95rem;
`;
