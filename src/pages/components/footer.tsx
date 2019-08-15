import React from "react"
import { Segment, Header, Container } from "semantic-ui-react"

export default (props) => (
    <Segment basic>
        <Container textAlign="right">
            <Header as='h6'>Copyright 2019 - {props.copyright}</Header>
        </Container>
    </Segment>
)