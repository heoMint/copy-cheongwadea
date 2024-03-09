import Line from '../../components/Line/Line';
import GalleryTap from './GalleryTap';
import GalleryTapCont from './GalleryTapCont';
import styled from 'styled-components';

const Gallery = () => {
    return (
        <GalleryWrapper>
            <Border className="mt-10 ">
                <Line />
                <div className="flex mb-3"></div>
                <h2 className="text-3xl font-semibold mt-5 mb-5 ">국민과 함께하는 민생토론회</h2>
                <h2 className="text-6xl font-bold navy mb-12">열여덟 번째, 대한민국 관문도시, 세계로 뻗어가는 인천</h2>
                <Line />
            </Border>
            <GalleryTap />
            <div className="flex w-dvw border-t-4 mb-3"></div>
            <GalleryTapCont />
            <Line />
        </GalleryWrapper>
    );
};

export default Gallery;

const GalleryWrapper = styled.section`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    top: 200px;
    margin: 0 45px;
`;

const Border = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
