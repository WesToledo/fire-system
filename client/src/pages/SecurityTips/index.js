import React, { useState, useEffect } from "react";
import { Page, Button, Card, Grid, Form, Table, Text } from "tabler-react";

import api from "~/services/api";

import Wrapper from "~/components/Wrapper";

function SecurityTips(props) {
  return (
    <Wrapper>
      <Grid.Row cards alignItems="center" justifyContent="center">
        <Grid.Col width={6}>
          <Page.Content className="card-header-form">
            <Page.Card title="">
              <Text>Aqui você encontra ...</Text>
            </Page.Card>
          </Page.Content>
        </Grid.Col>
      </Grid.Row>
    </Wrapper>
  );
}

export default SecurityTips;
