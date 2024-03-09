import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';
const GalleryTap = () => {
    return (
        <>
            <TapWrapper className="">
                <Tap className="">
                    <MdArrowBackIos className="text-3xl " />
                    <SpanFont className="">
                        <span>18차</span>
                    </SpanFont>
                    <SpanFont className=" ">
                        <span>17차</span>
                    </SpanFont>
                    <SpanFont className=" ">
                        <span>16차</span>
                    </SpanFont>
                    <SpanFont className="">
                        <span>15차</span>
                    </SpanFont>
                    <SpanFont className="">
                        <span>14차</span>
                    </SpanFont>
                    <MdArrowForwardIos className="text-3xl " />
                </Tap>
            </TapWrapper>
        </>
    );
};

export default GalleryTap;
const TapWrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 500px;
`;
const Tap = styled.div`
    display: flex;
    align-items: center;
    max-width: 500px;
`;
const SpanFont = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: gray;
    font-weight: 400;
    width: 20%;
    span {
        display: flex;
    }
`;

// 버튼이 눌리면 활성화되는 숫자 위 의 콩이 있어야함
// 누르면 검정색 대기중엔 회색
