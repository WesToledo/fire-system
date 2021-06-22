import React, { useState, useEffect } from "react";
import { Page, Button, Card, Grid, Form } from "tabler-react";

import api from "~/services/api";

import Wrapper from "~/components/Wrapper";

function Home(props) {
  return (
    <Wrapper>
      <Grid.Row cards alignItems="center" justifyContent="center">
        <Grid.Col width={8}>
          <Page.Content className="card-header-form">
            <Page.Card title="Filtros para pesquisa">
              <Form>
                <Grid.Row>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Tipo Ocupação/Uso">
                      <Form.Select>
                        <option>Residencial</option>
                        <option>Urbano</option>
                      </Form.Select>
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Descrição">
                      <Form.Select>
                        <option>Escola em geral</option>
                        <option>Residencia</option>
                      </Form.Select>
                    </Form.Group>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col sm={4} xs={12}>
                    <Form.Group label="Altura (m)">
                      <Form.Input placeholder="Altura..." />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={4} xs={12}>
                    <Form.Group label="Área Total (m)">
                      <Form.Input placeholder="Área Total..." />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={4} xs={12}>
                    <Form.Group label="População Máxima">
                      <Form.Input placeholder="População Máxima..." />
                    </Form.Group>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col>
                    <Button block color="primary">
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

export default Home;
