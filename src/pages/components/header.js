import React from "react"
import { Segment, Header } from "semantic-ui-react"

export default (props) => {
    const backgroundImage = { 'backgroundImage': 'url("' + props.backgroundImage + '")', 'height': '150px' }
    
    return (
        <Segment basic padded="very" style={backgroundImage}>
            <Header as='h1' textAlign='center'>
                <Header.Content>
                    {props.title}
                </Header.Content>
            </Header>
        </Segment>
    )
}
