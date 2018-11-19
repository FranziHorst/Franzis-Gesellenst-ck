import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Niramit:300,400,700');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-image: url("../../images/Background-Image.jpg");
  background-repeat: no-repeat;
  background-position-y: 150px;
  background-size: cover;
  display:flex;
  justify-content: center;
  align-items: center;
}
`
