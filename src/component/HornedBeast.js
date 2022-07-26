import { render } from '@testing-library/react';
import react from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class HornedBeast extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorited: 0,
            showModal: false
        }
    }
    Handlclick = () => {
        this.setState({
            favorited: this.state.favorited + 1
        });
        this.props.displayModal(this.props.data);
        this.setState({ showModal: true });
    }
    render() {
        return (

            <Card style={{ width: '18rem' }} onClick={this.Handlclick} >
                <Card.Img height="180" weidth="286" variant="top" src={this.props.image_url}
                />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description} </Card.Text>
                    <Button variant="primary">{this.state.favorited} ❤</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default HornedBeast;