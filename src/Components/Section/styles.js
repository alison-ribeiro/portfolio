import styled from "styled-components";

export const ContainerPag = styled.div`
  width: 100%;
`


export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 87%;
  align-items: flex-start;
 
  h2{
   position: relative;
   font-size: 1.8rem;
   margin-top: 30px;
    &::after{
      content: " ";
      height: 4px;
      width: 100%;
      background-color:${props => props.theme.colors.blue};
      border-radius: 5px;
      position: absolute;
      bottom:-10px;
      left: 0;
    }
  }
`

export const ContainerInfo = styled.div`
  width: 100%;

  .seeAll{
    margin-top: 30px;
  }

`