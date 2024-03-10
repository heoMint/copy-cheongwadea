import { useState } from 'react';
import { styled } from 'styled-components';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import Line from '../../../components/Line/Line';
export const LastArea = () => {
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
        <div className="grid relative top-60">
            <div>
                <img src="	https://www.president.go.kr/assets/images/main/yongSan3.jpg?v=2" alt=""></img>
            </div>
            <div>
                <div className="flex mt-10">
                    <div className="flex">
                        <div className="flex items-center w-[35rem] mr-7 ">
                            <Line />
                        </div>
                        <ButtonWrapper className="buttonBox mr-5 ">
                            <button onClick={onClickLeftHandler}>
                                <PiArrowLeftThin className="size-8  hover:text-beige transition" />
                            </button>
                        </ButtonWrapper>
                        <ButtonWrapper className="buttonBox">
                            <button onClick={onClickRightHandler}>
                                <PiArrowRightThin className="size-8 hover:text-beige transition" />
                            </button>
                        </ButtonWrapper>
                    </div>
                </div>
            </div>
            <div className="grid ml-[52rem] ">
                <h2 className="text-6xl mb-6 font-semibold">용산시대, 소통하는 대통령실</h2>
                <p className="text-lg ">
                    새로운 대통령 집무실은 용산공원을 거닐며 대통령이 일하는 모습을 보는 소통의 공간이 될 것입니다.
                    <br />
                    백악관 부지의 3배에 달하는 현 청와대는 과거와 미래를 연결하는 역사문화 공간으로 만들어 <br />
                    국민 품으로 돌려드립니다.
                </p>
            </div>
        </div>
    );
};

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
