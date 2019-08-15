import React from "react"
import { Container, Segment } from "semantic-ui-react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

export default (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    copyright
                }
            }
        }
    `)

    const site = data.site.siteMetadata

    return (
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{site.title}</title>
        </Helmet>
        <Header title={site.title}/>
        <Segment>
            This is the upper section of the layout component.  Menu, headers and other layout components that should be present on all pages should be loaded here.
        </Segment>
        {props.children}
        <Segment>
            This is the lower section of the layout component.  Menu, footers and other layout components that should be present on all pages should be loaded here.
        </Segment>
        <Footer copyright={site.copyright} />
    </Container>
)}