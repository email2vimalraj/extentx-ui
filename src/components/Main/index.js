import React, { Component } from 'react';
import { ApolloClient, gql, graphql, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { Grid, Row, Col } from 'react-bootstrap';

import Project from '../Project';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const projectsListQuery = gql`
  query projectsListQuery {
  getAllProjects {
    _id
    name
  }
}
`;

const ProjectList = ({ data: {loading, error, getAllProjects} }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Row>
      {
        getAllProjects.map( project =>
          <Col key={project._id} xs={6} md={3}>
            <Project projectName={project.name} />
          </Col>
        )
      }
    </Row>
  );
};

const ProjectListWithData = graphql(projectsListQuery)(ProjectList);

class Main extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Grid fluid={true}>
          <ProjectListWithData />
        </Grid>
      </ApolloProvider>
    );
  }
}

export default Main;
