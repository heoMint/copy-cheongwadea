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

    const renderImages = () => {
        const images = [
            'https://www.president.go.kr/images/2023/12/EALPnSrdYBTr657b9a725b9f53.03803026.jpg',
            'https://www.president.go.kr/images/2023/12/L1wysckCsVH0657b9aa6cd53f1.04417040.jpg',
            'https://www.president.go.kr/images/2023/12/azb6FGE18NrM657b9b5c82e064.52309177.jpeg',
            'https://www.president.go.kr/images/2023/12/G4Bf8auJGjMx657b9b7c97fca5.11111305.jpg',
            'https://www.president.go.kr/images/2023/12/f0JC0Cyt77TK657b9bb679ce82.88115336.jpg',
            'https://www.president.go.kr/images/2023/12/qG8fd29Ftpbu657b9c47ae8288.44839582.jpg',
            'https://www.president.go.kr/images/2023/12/PqS4dDA0ljWs657b9c7b560716.97124706.jpg',
            'https://www.president.go.kr/images/2023/12/kqH0wAgWqRcd657b9cb705ae97.10646713.jpg',
        ];

        const startIndex = selected;
        const endIndex = (startIndex + pageSize) % lastIndex;
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
