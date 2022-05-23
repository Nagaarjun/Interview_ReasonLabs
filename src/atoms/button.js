import { Button as Btn } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Btn)`
`;
const Button = (props) => {
    return (
        <StyledButton {...props} />
    );
}

export default Button;
