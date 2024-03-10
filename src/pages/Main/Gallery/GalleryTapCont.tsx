import styled from 'styled-components';
import RightArea from './RightArea';
const GalleryTapCont = () => {
    return (
        <TapContWrapper>
            <TopCont className="animate-intro">
                <InnerLeft>
                    <img
                        className="rounded-lg"
                        src="https://www.president.go.kr/images/contents/thum_gallery17.jpeg"
                        alt=""
                    />
                </InnerLeft>
                <InnerRight>
                    <RightArea />
                </InnerRight>
            </TopCont>
        </TapContWrapper>
    );
};

export default GalleryTapCont;

const TapContWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1584px;
`;

const TopCont = styled.div`
    display: flex;
`;
const InnerLeft = styled.div`
    width: 40%;
`;
const InnerRight = styled.div`
    width: 60%;

`;
