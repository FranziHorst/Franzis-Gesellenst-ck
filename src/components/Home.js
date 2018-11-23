import React, { Component } from 'react'

import styled from 'styled-components'
import Headline from './Headline'
import SimpleCard from './SimpleCard'
import Button from './Button'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 25px;

  h3 {
    font-family: 'Niramit', sans-serif;
  }
`

export const HeadlineWrapper = styled.section`
  justify-content: center;
  display: flex;
`

export const ButtonWrapper = styled.section`
  justify-content: center;
  display: flex;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <HeadlineWrapper>
          <Headline text="Collective Notebook" />
        </HeadlineWrapper>
        <ButtonWrapper>
          <Button>Projekt erstellen</Button>
        </ButtonWrapper>
        <SimpleCard title="Was ist Collective Notebook? (CNB)">
          <p>
            Collective Notebook, oder kurz, CNB, ist eine Kreativitätstechnik in
            der Jeder im Team ein Buch bekommt. Vorne kommt die Problemstellung
            zu der man in den nächsten Wochen Ideen entwickeln soll. Das Buch
            trägt man immer bei sich um jederzeit seine Ideen eintragen zu
            können. Damit man nicht immer ein Buch mitschleppen muss, haben wir
            die App entwickeln damit du diese Technik mit deinem Smartphone
            ausführen kannst.
          </p>
        </SimpleCard>

        <SimpleCard title="Wie funktioniert CNB?">
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
        </SimpleCard>
      </Wrapper>
    )
  }
}
