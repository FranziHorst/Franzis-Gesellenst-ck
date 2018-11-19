import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

// import StyleBox from './StyleBox'
import Headline from '../components/Headline'
import Card from '../components/Card'

storiesOf('Headline', module).add('Collective Notebook', () => (
  <React.Fragment>
    <Headline>{text('Label', 'Collective Notebook')}</Headline>
  </React.Fragment>
))

storiesOf('Card', module).add('Content Card', () => (
  <React.Fragment>
    <Card title="Was ist Collective Notebook? (CNB)">
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

// storiesOf('Todo', module).add('default', () => (
//   <React.Fragment>
//     <Todo
//       text={text('Todo 1: text', 'Hello world')}
//       done={boolean('Todo 1: done', false)}
//       onToggle={action('Todo 1: onToggle')}
//       onDelete={action('Todo 1: onDelete')}
//     />
//     <StyleBox h={40} />
//     <Todo
//       text={text('Todo 2: text', 'Lorem ipsum dolor sit')}
//       done={boolean('Todo 2: done', false)}
//       onToggle={action('Todo 2: onToggle')}
//       onDelete={action('Todo 2: onDelete')}
//     />
//   </React.Fragment>
// ))

// storiesOf('ui/Input', module).add('default', () => (
//   <React.Fragment>
//     <Input onEnter={action('onEnter')} />
//   </React.Fragment>
// ))

// storiesOf('ProgressBar', module).add('default', () => (
//   <React.Fragment>
//     <ProgressBar
//       percentage={number('percentage', 0, {
//         range: true,
//         min: 0,
//         max: 1,
//         step: 0.01,
//       })}
//     />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1 / 3} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1 / 2} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={2 / 3} />
//     <StyleBox h={40} />
//     <ProgressBar percentage={1} />
//   </React.Fragment>
// ))

// storiesOf('Separator', module).add('default', () => (
//   <React.Fragment>
//     <Separator text="One" />
//     <StyleBox h={40} />
//     <Separator text="Two words" />
//   </React.Fragment>
// ))

// storiesOf('ToggleButton', module).add('default', () => (
//   <React.Fragment>
//     <ToggleButton
//       isDefault={boolean('isDefault', true)}
//       onClick={action('onClick')}
//       defaultText={text('defaultText', 'Click me')}
//       alternativeText={text('alternativeText', 'I was clicked')}
//     />
//   </React.Fragment>
// ))
