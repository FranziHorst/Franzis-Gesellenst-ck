import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'

import Headline from '../components/Headline'
import Card from '../components/Card'

storiesOf('Headline', module).add('Collective Notebook', () => (
  <React.Fragment>
    <Headline text={text('Label', 'Collective Notebook')} />
  </React.Fragment>
))

storiesOf('Card', module).add('Content Card', () => (
  <React.Fragment>
    <Card title={text('Label', 'Was ist Collective Notebook? (CNB)')}>
      <p>
        Collective Notebook, oder kurz, CNB, ist eine Kreativitätstechnik in der
        Jeder im Team ein Buch bekommt. Vorne kommt die Problemstellung zu der
        man in den nächsten Wochen Ideen entwickeln soll. Das Buch trägt man
        immer bei sich um jederzeit seine Ideen eintragen zu können. Damit man
        nicht immer ein Buch mitschleppen muss, haben wir die App entwickeln
        damit du diese Technik mit deinem Smartphone ausführen kannst.
      </p>
    </Card>
  </React.Fragment>
))
