import React, { useState, useEffect } from "react";
import { Page, Button, Card, Grid, Form, Table } from "tabler-react";

import api from "~/services/api";

import Wrapper from "~/components/Wrapper";

function TalkWithUs(props) {
  return (
    <Wrapper>
      <Grid.Row cards alignItems="center" justifyContent="center">
        <Grid.Col width={8}>
          <Page.Content className="card-header-form">
            <Page.Card title="Filtros para pesquisa">
              <Form>
                <Grid.Row>
                  <Grid.Col sm={12} xs={12}>
                    <Form.Group label="Assunto">
                      <Form.Input type="text" name="assunto" />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Nome">
                      <Form.Input name="name" />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Email">
                      <Form.Input type="email" name="email" />
                    </Form.Group>
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Estado">
                      <Form.Input type="text" name="state" />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Município">
                      <Form.Input name="city" />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={12} xs={12}>
                    <Form.Group label="Mensagem">
                      <textarea name="message" style={{ width: "100%" }} />
                    </Form.Group>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col>
                    <Button block color="primary" type="submit">
                      Pesquisar
                    </Button>
                  </Grid.Col>
                </Grid.Row>
              </Form>
            </Page.Card>
          </Page.Content>
        </Grid.Col>
      </Grid.Row>
    </Wrapper>
  );
}

export default TalkWithUs;
