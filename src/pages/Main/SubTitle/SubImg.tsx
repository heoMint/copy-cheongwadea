import { useState } from 'react';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import styled from 'styled-components';

const SubImg = () => {
    const [selected, setSelected] = useState<number>(0);
    const lastIndex = 7;
    const pageSize = 4; // 한 페이지에 보여질 이미지 개수

    const handlerPrev = () => {
        setSelected((prevSelected) => (prevSelected - 1 + lastIndex) % lastIndex);
    };

    const handlerNext = () => {
        setSelected((prevSelected) => (prevSelected + 1) % lastIndex);
    };

    // 이미지 목업 데이터
    const renderImages = () => {
        const images = [
            'https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/4464377/pexels-photo-4464377.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/6898856/pexels-photo-6898856.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/4197560/pexels-photo-4197560.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&w=600',
        ];

        const startIndex = selected;
        const endIndex = (startIndex + pageSize) % lastIndex;
        // 페이지 단위로 이미지를 표시
        // slice메서드를 사용해 현재페이지의 이미지를 추출 후 map 메서드로 이미지를 컴포넌트로 변환
        if (startIndex <= endIndex) {
            return images
                .slice(startIndex, endIndex + 1)
                .map((image, index) => <Img key={index} src={image} alt={`Image ${startIndex + index}`} />);
        } else {
            return [
                ...images
                    .slice(startIndex, lastIndex + 1)
                    .map((image, index) => <Img key={index} src={image} alt={`Image ${startIndex + index}`} />),
                ...images
                    .slice(0, endIndex + 1)
                    .map((image, index) => (
                        <Img key={index + lastIndex - startIndex + 1} src={image} alt={`Image ${index}`} />
                    )),
            ];
        }
    };
    return (
        <div className="grid justify-center relative top-5 mx-11">
            <div className="flex justify-between relative">
                <p className="text-4xl font-semibold mb-12">반도체 동맹 구축을 위한 네덜란드 국빈 방문</p>
                <div className="flex">
                    <ButtonWrapper className="buttonBox mr-5">
                        <button onClick={handlerPrev}>
                            <PiArrowLeftThin className="size-8  hover:text-beige transition" />
                        </button>
                    </ButtonWrapper>
                    <ButtonWrapper className="buttonBox">
                        <button onClick={handlerNext}>
                            <PiArrowRightThin className="size-8 hover:text-beige transition" />
                        </button>
                    </ButtonWrapper>
                </div>
            </div>

            <ImgWrapper>{renderImages()}</ImgWrapper>

            <div className="relative flex justify-center items-center h-20 "></div>
        </div>
    );
};

export default SubImg;

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 45px;
`;
const Img = styled.img`
    margin: 0 20px;
    width: 20%;
    background-size: cover;
    backface-visibility: hidden;
    will-change: transform;
    transition: all 2s;
    border-radius: 10px;
    transition: transform 0.5s ease-in-out;
`;

// 오른쪽 왼쪽 버튼을 눌러 슬라이드 앞뒤로 넘기기
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
