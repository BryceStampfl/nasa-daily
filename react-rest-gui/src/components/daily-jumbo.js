import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

class DailyJumbo extends React.Component {

    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h4>{this.props.data.title}</h4>

                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src={this.props.data.url} />
                    </ResponsiveEmbed>



                    <p>
                        {this.props.data.explanation}
                    </p>
                </Container>
            </Jumbotron>


        );
    }


}

export default DailyJumbo;