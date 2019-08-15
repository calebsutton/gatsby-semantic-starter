import React from "react"
import { Container } from "semantic-ui-react"
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
        {props.children}
        <Footer copyright={site.copyright} />
    </Container>
)}