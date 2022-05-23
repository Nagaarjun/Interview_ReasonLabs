import { useState } from 'react';
import { Col, Form, FormGroup, InputGroup, Label, Row } from 'reactstrap';
import styled from 'styled-components';
import Button from '../atoms/button';
import Input from '../atoms/input';
import './DessertForm.css';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.red}
`;

const StyledRow = styled(Row)`
 
`;

const StyledHeader = styled.h6`
    font-weight: 500;
`;

const StyledButtonCol = styled(Col)`
    align-self  : flex-end;
    margin-bottom: 1rem;
`;


const AddDessertForm = ({ addToDessertList, name, amount, setName, setAmount }) => {
    return (
        <>
            <StyledHeader>Add Your Favorite Dessert to the Menu !!!</StyledHeader>
            <Form className="AddDessertForm">
                <StyledRow>
                    <Col lg={3}>
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input type={"text"} onChange={(e) => setName(e?.target?.value)} value={name || ""} />
                        </FormGroup>
                    </Col>
                    <Col lg={3}>
                        <FormGroup>
                            <Label for="Amount">Amount</Label>
                            <Input type={"number"} onChange={(e) => setAmount(e?.target?.value)} value={amount || ""} />
                        </FormGroup>
                    </Col>
                    <StyledButtonCol lg={3}>
                        <Button color="primary" onClick={() => { addToDessertList() }}>+</Button>
                    </StyledButtonCol>

                </StyledRow>
            </Form>
        </>

    );
}

export default AddDessertForm;
