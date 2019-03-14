import styled from "styled-components";

const CardStyled = styled.div`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      height: 200px;
      min-width: 200px;
      border-radius: 5%;
      padding: 25px;
      background-color: #f4f4f4;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Credentials = styled.div`
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
`;

const ArrowWrapper = styled.div`
      display: flex;
      padding-top: 25px;
      border-top: 1px solid #000;
      ${props => props.isApplied ?
        `justify-content: flex-end;` :
        `justify-content: space-between`
}
`;

export {
    CardStyled,
    MainWrapper,
    Credentials,
    ArrowWrapper
};
