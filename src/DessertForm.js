import { Col, InputGroup, Row } from 'reactstrap';
import styled from 'styled-components';
import Button from './atoms/button';
import Input from './atoms/input';
import './DessertForm.css';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.red}
`;
// const styled
const AddDessertForm = () => {
    return (
        <div className="AddDessertForm">
            DessertForm
            <Row className='abc'>
                <Col lg={3}>
                    <InputGroup>
                        <Input type={"text"} />
                    </InputGroup>
                </Col>
                <Col lg={3}>
                    <InputGroup>
                        <Input type={"text"} />
                    </InputGroup>
                </Col>
                <Col lg={3}>
                    <Button>+</Button>
                </Col>

            </Row>
        </div>
    );
}

export default AddDessertForm;
