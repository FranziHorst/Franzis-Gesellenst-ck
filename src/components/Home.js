import React, { Component } from 'react'
import uid from 'uid'

import styled from 'styled-components'
import Headline from './Headline'
import Card from './Card'

const Wrapper = styled.section`
  display: grid;
`

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Headline />

          <Card title="Was ist Collective Notebook? (CNB)">
            <p>
              Collective Notebook, oder kurz, CNB, ist eine Kreativitätstechnik
              in der Jeder im Team ein Buch bekommt. Vorne kommt die
              Problemstellung zu der man in den nächsten Wochen Ideen entwickeln
              soll. Das Buch trägt man immer bei sich um jederzeit seine Ideen
              eintragen zu können. Damit man nicht immer ein Buch mitschleppen
              muss, haben wir die App entwickeln damit du diese Technik mit
              deinem Smartphone ausführen kannst.
            </p>
          </Card>

          <Card title="Wie funktioniert CNB?">
            <p>
              Vorbereitungsphase: 1. Lege die Teilnehmerzahl fest 2. Definiere
              eine Problemstellung 3. Setze eine Deadline Durchführungsphase: 4.
              Notiere dir deine Ideen 5. Nutze ein gemeinsames Board zum
              Austausch mit Kollegen Zusammenfassung: 6. Auswertung:
              Zusammenfassung abgleichen 7. Notizen durchsehen 8.
              Basisvorschläge erarbeiten 9. gemeinsame Konzepterstellung
            </p>
          </Card>
        </Wrapper>
      </React.Fragment>
    )
  }
}
