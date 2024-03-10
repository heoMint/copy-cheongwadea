import { useState } from 'react';

interface AreaDtProps {
    id: number;
    content: string;
}
interface imgDtProps {
    id: number;
    img: React.ReactNode;
    link: React.ReactNode;
}
const txtArea = () => {
    const imgData: imgDtProps[] = [
        {
            id: 1,
            img: (
                <img
                    src="https://www.president.go.kr/images/2024/03/JaJc2d0fnHg165eacf0a0952c2.74260068.jpg"
                    alt="GTX-B노선 착공 기념식에서 발언하시는 윤 대통령"
                />
            ),
            link: <a href="https://www.president.go.kr/president/speeches/j0XX9kAn" />,
        },
        {
            id: 2,
            img: (
                <img
                    src="https://www.president.go.kr/images/2024/03/cCAydcWsCm7Y65eaceca9549d7.66900896.jpg"
                    alt="국민과 함께하는 민생토론회 - 열여덟 번째, 대한민국 관문도시, 세계로 뻗어나가는 인천 - 모두 발언중인 윤 대통령"
                />
            ),
            link: <a href="https://www.president.go.kr/president/speeches/SCCZ1KlZ" />,
        },
        {
            id: 3,
            img: (
                <img
                    src="https://www.president.go.kr/images/2024/03/ANPbZz075qRA65e901bc9384a6.66704715.jpg"
                    alt="의사 집단행동 중앙재난안전대책본부 회의 중인 윤석열 대통령"
                />
            ),
            link: <a href="https://www.president.go.kr/president/speeches/SCCZ1KlZ" />,
        },
    ];
    const contentArea: AreaDtProps[] = [
        {
            id: 1,
            content: '인천 시민들의 삶을 완전히 바꿔놓을 GTX-B, 대통령이 직접 챙길 것',
        },
        {
            id: 2,
            content: '인천의 바다, 하늘, 땅 모두를 바꿔놓겠습니다',
        },
        {
            id: 3,
            content: '전공의 이탈로 비상의료체계 가동하는 현실은 비정상적',
        },
    ];
    const textList = contentArea.map((item) => (
        <div key={item.id}>
            <p>{item.content}</p>v
        </div>
    ));
    return <p>{textList}</p>;
};
export default txtArea;
