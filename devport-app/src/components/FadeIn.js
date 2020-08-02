import styled from "styled-components";

const FadeIn = styled.div`
  opacity: 0;

  /* Safari, Chrome and Opera > 12.1 */
  -webkit-animation: fadein-wk
    ${(props) => (props.duration ? props.duration : "3")}s;

  /* Firefox < 16 */
  -moz-animation: fadein-moz
    ${(props) => (props.duration ? props.duration : "3")}s;

  /* Internet Explorer */
  -ms-animation: fadein-ms
    ${(props) => (props.duration ? props.duration : "3")}s;

  /* Opera < 12.1 */
  -o-animation: fadein-o ${(props) => (props.duration ? props.duration : "3")}s;

  animation: fadein ${(props) => (props.duration ? props.duration : "3")}s;
  animation-delay: ${(props) => (props.delay ? props.delay : "1")}s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    from {
    }
    to {
      opacity: 1;
      transform: translate(
        ${(props) => (props.trnslToX ? props.trnslToX : "0")}%,
        ${(props) => (props.trnslToY ? props.trnslToY : "0")}%
      );
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein-moz {
    from {
      opacity: 0;
      transform: translate(
        ${(props) => (props.trnslFrmX ? props.trnslFrmX : "0")}%,
        ${(props) => (props.trnslFrmY ? props.trnslFrmY : "0")}%
      );
    }
    to {
      opacity: 1;
      transform: translate(
        ${(props) => (props.trnslToX ? props.trnslToX : "0")}%,
        ${(props) => (props.trnslToY ? props.trnslToY : "0")}%
      );
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein-wk {
    from {
      opacity: 0;
      transform: translate(
        ${(props) => (props.trnslFrmX ? props.trnslFrmX : "0")}%,
        ${(props) => (props.trnslFrmY ? props.trnslFrmY : "0")}%
      );
    }
    to {
      opacity: 1;
      transform: translate(
        ${(props) => (props.trnslToX ? props.trnslToX : "0")}%,
        ${(props) => (props.trnslToY ? props.trnslToY : "0")}%
      );
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein-ms {
    from {
      opacity: 0;
      transform: translate(
        ${(props) => (props.trnslFrmX ? props.trnslFrmX : "0")}%,
        ${(props) => (props.trnslFrmY ? props.trnslFrmY : "0")}%
      );
    }
    to {
      opacity: 1;
      transform: translate(
        ${(props) => (props.trnslToX ? props.trnslToX : "0")}%,
        ${(props) => (props.trnslToY ? props.trnslToY : "0")}%
      );
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein-o {
    from {
      opacity: 0;
      transform: translate(
        ${(props) => (props.trnslFrmX ? props.trnslFrmX : "0")}%,
        ${(props) => (props.trnslFrmY ? props.trnslFrmY : "0")}%
      );
    }
    to {
      opacity: 1;
      transform: translate(
        ${(props) => (props.trnslToX ? props.trnslToX : "0")}%,
        ${(props) => (props.trnslToY ? props.trnslToY : "0")}%
      );
    }
  }
`;

export default FadeIn;
