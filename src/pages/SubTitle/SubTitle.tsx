
import SubImg from './SubImg';
import styled from 'styled-components';

const SubTitle = () => {
    return (
        <SubTitleWrapper>
            <div></div>
            <div>
                <SubImg />
            </div>
        </SubTitleWrapper>
    );
};

export default SubTitle;

const SubTitleWrapper = styled.div`
    position: relative;
    top: 200px;
`;
