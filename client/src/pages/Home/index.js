import React, { useState, useEffect } from "react";
import { Page, Button, Card, Grid, Form, Table } from "tabler-react";

import api from "~/services/api";

import Wrapper from "~/components/Wrapper";

function Home(props) {

  const subOcupationArray = {
    residencial: ["Habitação unifamiliar", "Habitação multifamiliar", "Habitação coletiva"],
    hospedagem: ["Hotel e assemelhado", "Hotel residencial"],
    comercial: [
      "Comércio com baixa carga de incêndio",
      "Comércio com média e alta carga de incêndio",
      "Centros comerciais de compras(Shopping centers)"
    ],
    professional: [
      "Local para prestação de serviço profissional ou condução de negócios.",
      "Agência bancária",
      "Serviço de reparação",
      "Laboratório"
    ],
    educacional: ["Escola em geral",
      "Escola especial",
      "Espaço para cultura física",
      "Centro de treinamento profissional",
      "Pré - escola",
      "Escola para portadores de deficiências"],
    reunion: [, "Local onde há objeto de valor inestimável",
      "Local religioso e velório",
      "Centro esportivo e de exibição",
      "Estação e terminal de passageiro",
      "Arte cênica e auditório",
      "Casas de show",
      "Construção provisória e evento temporario",
      "Local para refeição",
      "Recreação",
      "Exposição de objetos e animais",
      "Clubes sociais e de diversão"
    ],
    healthy: ["Hospital veterinário e assemelhados",
      "Locais onde pessoas requerem cuidados especiais por limitações físicas ou mentais.",
      "Hospital e assemelhado.",
      "Edificações das forças armadas e policiais.",
      "Local onde a liberdade das pessoas sofre restrições",
      "Clínicas e consultório médico e odontológico"
    ],
    institucional: ["Hospital veterinário e assemelhados",
      "Locais onde pessoas requerem cuidados especiais por limitações físicas ou mentais.",
      "Hospital e assemelhado.",
      "Edificações das forças armadas e policiais.",
      "Local onde a liberdade das pessoas sofre restrições",
      "Clínicas e consultório médico e odontológico"
    ]
  }

  const itsInfo = {
    1: { description: 'Procedimentos Administrativos', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_01_9a_Ed_portaria_63_errata_03.pdf' },
    2: { description: 'Terminologia de Proteção Contra Incêndio e Pânico', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_02_2a_Ed_portaria_61_errata_34.pdf' },
    3: { description: 'Composição do Processo de Segurança Contra incêndio e Pânico (PSCIP) ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_03_2_ed.pdf' },
    4: { description: 'Acesso de Viatura nas Edificações e Áreas de Risco ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_04_2a_Ed_portaria_61_errata_16.pdf' },
    5: { description: 'Separações entre Edificações ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_05_1a_Ed_portaria_61_errata_17.pdf' },
    6: { description: 'Segurança Estrutural das Edificações', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_06_1a_Ed_portaria_61_errata_18.pdf' },
    7: { description: 'Compartimentação Horizontal e Compartimentação Vertical ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_07_1a_Ed_portaria_61_errata_19.pdf' },
    8: { description: 'Saídas de Emergência em Edificações', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_08_2a_Ed_portaria_63_errata_04.pdf' },
    9: { description: 'Carga Incêndio nas Edificações e Espaços destinados a Uso Coletivo', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_09_2a_Ed_PUBLICADA.pdf' },
    10: { description: 'Pressurização de Escada de Segurança ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_10_1a_Ed_portaria_61_errata_20.pdf' },
    11: { description: 'Plano de Intervenção de Incêndio ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_11_1a_Ed_portaria_61_errata_32.pdf' },
    12: { description: 'Brigada de Incêndio', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_12_3a_Ed_portaria_61_emenda_08.pdf' },
    13: { description: 'Iluminação de Emergência', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_13_1_ed_Portaria_5.pdf' },
    14: { description: 'Sistema de Detecção e Alarme de Incêndio  ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_14_2a_Ed_portaria_61_errata_22.pdf' },
    15: { description: 'Sinalização de Emergência ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_15_1a_Ed_portaria_61_errata_33.pdf' },
    16: { description: ' Sistema de Proteção por Extintores de Incêndio', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_16_3a_Ed_portaria_61_errata_39.pdf' },
    17: { description: 'Sistema de Hidrantes e Mangotinhos para Combate a Incêndio ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_17_1a_Ed_portaria_63_errata_05.pdf' },
    18: { description: 'Sistema de Chuveiros Automáticos ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_18_1a_Ed_portaria_61_errata_24.pdf' },
    19: { description: '(Revogada) Adotar ABNT NBR 17505 - Sistema de Resfriamento para Líquidos e Gases Inflamáveis e Combustíveis', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_19_1_ed_revogada.pdf' },
    20: { description: '(Revogada) Adotar ABNT NBR 17505 - Sistema de Proteção por Espuma', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_20_1_ed_revogada.pdf' },
    21: { description: 'Sistema Fixo de Gases para Combate a Incêndio', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_21_1a_Ed_portaria_61_errata_35.pdf' },
    22: { description: '(Revogada) Adotar ABNT NBR 17505 - Armazenamento de Líquidos Inflamáveis e Combustíveis', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_22_1_ed_Portaria_5.pdf' },
    23: { description: 'Manipulação, Armazenamento, Comercialização e Utilização de GLP', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_23_2a_Ed_portaria_61_errata_36.pdf' },
    24: { description: 'Comercialização, Distribuição e Utilização de Gás Natural', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_24_2_ed_Portaria_13.pdf' },
    25: { description: 'Fogos de Artifícios e Pirotecnia', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_25_2a_Ed_portaria_61_errata_40.pdf' },
    26: { description: 'Heliponto e Heliporto', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_26_2_ed_Portaria_35.pdf' },
    27: { description: 'Medidas de Segurança para Produtos Perigosos ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_27_1a_Ed_portaria_61_errata_41.pdf' },
    28: { description: 'Cobertura de Sapê, Piaçava e Similares', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_28_1a_Ed_portaria_61_errata_25.pdf' },
    29: { description: 'Hidrante Público', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_29_1_ed_Portaria_5.pdf' },
    30: { description: '(Revogada) Adotar ABNT NBR 13231 - Subestações Elétricas', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_30_1_ed_revogada.pdf' },
    31: { description: 'Pátio de Contêineres', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_31_1a_Ed_portaria_61_errata_26.pdf' },
    32: { description: 'Proteção Contra Incêndio em Cozinhas Profissionais ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_32_1a_Ed_portaria_61_errata_27.pdf' },
    33: { description: 'Eventos Temporários', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_33_3a_Ed_portaria_61_errata_42.pdf' },
    34: { description: 'Cadastramento de Empresas e Responsáveis Técnicos', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_34_3a_Ed_portaria_61_errata_43.pdf' },
    35: { description: 'Segurança Contra Incêndio em Edificações que compõem o Patrimônio Cultural ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_35_2a_Ed_portaria_61_errata_28.pdf' },
    36: { description: '(Revogada) - Sistema de Proteção Contra Descargas Atmosféricas', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_36_1_ed_revogada.pdf' },
    37: { description: 'Centros Esportivos e de Exibição ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_37_2a_Ed_portaria_63_emenda_01.pdf' },
    38: { description: 'Controle e Materiais de Acabamento e Revestimento', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_38_1a_Ed_portaria_61_errata_37.pdf' },
    39: { description: 'Blocos de Carnaval', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_39_3_ed_Portaria_58.pdf' },
    40: { description: 'Adequação de Medidas de Segurança para Edificações ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_40_2a_Ed_portaria_61_errata_29.pdf' },
    41: { description: 'Controle de Fumaça', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_41_1a_Ed_portaria_61_errata_30.pdf' },
    42: { description: 'Estabelecimentos Destinados à Restrição de Liberdade', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_42_1a_Ed_portaria_61_errata_31.pdf' },
    43: { description: 'Armazenagem em Silos ', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_43_1a_Ed_PUBLICADA.pdf' },
    44: { description: 'Edificações e Instalações de Agronegócio', url: 'https://www.bombeiros.mg.gov.br/storage/files/shares/intrucoestecnicas/IT_44_1a_Ed_PUBLICADA.pdf' },
  }

  const [ocupation, setOcupation] = useState("residencial")
  const [subOcupation, setSubOcupation] = useState(subOcupationArray["residencial"])
  const [renderTable, setRenderTable] = useState(false)

  const [its, setIts] = useState([])

  const [form, setForm] = useState({
    height: null,
    area: null,
    population: null
  })

  function handleChangeInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  function handleChangeSelect(e) {
    setOcupation(e.target.value)
  }

  function handleChangeSubOcupation(e) {
    console.log(e.target)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setRenderTable(false)
    try {
      const response = await api.post('/classificator/classificate', { ...form, ocupation: ocupation })
      setIts(response.data.its)
      setRenderTable(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setSubOcupation(subOcupationArray[ocupation])
  }, [ocupation])


  return (
    <Wrapper>
      <Grid.Row cards alignItems="center" justifyContent="center">
        <Grid.Col width={6}>
          <Page.Content className="card-header-form">
            <Page.Card title="Filtros para pesquisa">
              <Form onSubmit={handleSubmit} >
                <Grid.Row>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Tipo Ocupação/Uso">
                      <Form.Select onChange={handleChangeSelect} value={ocupation}>
                        <option value="residencial">Residencial</option>
                        <option value="hospedagem">Hospedagem</option>
                        <option value="comercial">Comercial</option>
                        <option value="professional">Profissional</option>
                        <option value="educacional">Educacional</option>
                      </Form.Select>
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={6} xs={12}>
                    <Form.Group label="Descrição">
                      <Form.Select onChange={handleChangeSubOcupation}>
                        {subOcupation.map(sub => (
                          <option value={sub}>{sub}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col sm={4} xs={12}>
                    <Form.Group label="Altura (m)">
                      <Form.Input onChange={handleChangeInput} type="number" name="height" placeholder="Altura..." />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={4} xs={12}>
                    <Form.Group label="Área Total (m)">
                      <Form.Input onChange={handleChangeInput} type="number" name="area" placeholder="Área Total..." />
                    </Form.Group>
                  </Grid.Col>
                  <Grid.Col sm={4} xs={12}>
                    <Form.Group label="População Máxima">
                      <Form.Input onChange={handleChangeInput} type="number" name="population" placeholder="População Máxima..." />
                    </Form.Group>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col>
                    <Button block color="primary" type="submit" disabled={!(form.height != null && form.population != null && form.area != null)}>
                      Pesquisar
                    </Button>
                  </Grid.Col>
                </Grid.Row>
              </Form>
            </Page.Card>
          </Page.Content>
        </Grid.Col>
      </Grid.Row>

      {
        renderTable &&
        <Grid.Row alignItems="center" justifyContent="center" style={{ marginTop: "-100px" }}>
          <Grid.Col width={6}>
            <Page.Content className="card-header-form">
              <Page.Card title="Instruções Técnicas">
                <Table>
                  <Table.Header>
                    <Table.ColHeader >IT</Table.ColHeader>
                    <Table.ColHeader >Descrição</Table.ColHeader>
                    <Table.ColHeader className="text-align-center">Acesso Documento Completo</Table.ColHeader>
                  </Table.Header>
                  <Table.Body>
                    {
                      its != 0 && its.map((it) =>
                        <Table.Row >
                          <Table.Col>{it}</Table.Col>
                          <Table.Col >{itsInfo[it].description}</Table.Col>
                          <Table.Col className="center">
                            <Button color="primary" icon="upload"   >
                              <a style={{ color: "#fff" }} target="_blank" href={itsInfo[it].url}>
                                Acessar
                              </a>
                            </Button>
                          </Table.Col>
                        </Table.Row>
                      )
                    }
                  </Table.Body>
                </Table>
              </Page.Card>
            </Page.Content>
          </Grid.Col>
        </Grid.Row>
      }
    </Wrapper>
  );
}

export default Home;
