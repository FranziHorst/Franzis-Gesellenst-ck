import React, { Component } from 'react'

import styled from 'styled-components'
import Headline from './Headline'
import Card from './Card'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 25px;
  grid-template-rows: 150px auto;

  h3 {
    font-family: 'Niramit', sans-serif;
  }
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Headline text="Collective Notebook" />

        <Card title="Was ist Collective Notebook? (CNB)">
          <p>
            Collective Notebook, oder kurz, CNB, ist eine Kreativitätstechnik in
            der Jeder im Team ein Buch bekommt. Vorne kommt die Problemstellung
            zu der man in den nächsten Wochen Ideen entwickeln soll. Das Buch
            trägt man immer bei sich um jederzeit seine Ideen eintragen zu
            können. Damit man nicht immer ein Buch mitschleppen muss, haben wir
            die App entwickeln damit du diese Technik mit deinem Smartphone
            ausführen kannst.
          </p>
        </Card>

        <Card title="Wie funktioniert CNB?">
          <h3>Vorbereitungsphase:</h3>
          <p>
            1. Lege die Teilnehmerzahl fest
            <br />
            2. Definiere eine Problemstellung
            <br />
            3. Setze eine Deadline
          </p>

          <h3>Durchführungsphase:</h3>
          <p>
            4. Notiere dir deine Ideen
            <br />
            5. Nutze ein gemeinsames Board zum Austausch mit Kollegen
          </p>

          <h3>Zusammenfassung:</h3>
          <p>
            6. Auswertung: Zusammenfassung abgleichen
            <br />
            7. Notizen durchsehen
            <br />
            8. Basisvorschläge erarbeiten
            <br />
            9. gemeinsame Konzepterstellung
          </p>
        </Card>
      </Wrapper>
    )
  }
}
