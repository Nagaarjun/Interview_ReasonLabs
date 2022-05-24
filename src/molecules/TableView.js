import { Col, Row } from "reactstrap";
import styled from "styled-components";
import Button from "../atoms/button";
import "./TableView.css";

const StyledWrapper = styled.div`
    margin-bottom: 1rem;
`;

const StyledRow = styled(Row)`
    margin:0;  
    margin-bottom: 1rem  
`;

const StyledButton = styled(Button)`
    border-radius:50%;
    padding: .15rem .65rem;
`;

const StyledHeader = styled.h5`
    font-weight: 700;
`;

const TableView = ({ dessertsList, updateDessertsList }) => {
    return (
        <>
            <StyledHeader>Your Menu:</StyledHeader>
            <StyledRow>
                <Col lg={3} sm={3} md={3} xs={3}><b>S.No</b></Col>
                <Col lg={3} sm={3} md={3} xs={3}><b>Name</b></Col>
                <Col lg={3} sm={3} md={3} xs={3}><b>Amount</b></Col>
                <Col lg={3} sm={3} md={3} xs={3}><b>Actions</b></Col>
            </StyledRow>
            {Array.isArray(dessertsList) && dessertsList.length > 0 && dessertsList.map((item, index) => {
                return (
                    <StyledRow>
                        <Col lg={3} sm={3} md={3} xs={3}>
                            {item.id + 1}
                        </Col>
                        <Col lg={3} sm={3} md={3} xs={3}>
                            {item.name}
                        </Col>
                        <Col lg={3} sm={3} md={3} xs={3}>
                            {item.amount}
                        </Col>
                        <Col lg={3} sm={3} md={3} xs={3}>
                            <StyledButton color="danger" onClick={() => { updateDessertsList(index) }}>-</StyledButton>
                        </Col>
                    </StyledRow>
                )
            })
            }
        </>
    );
}

export default TableView;
