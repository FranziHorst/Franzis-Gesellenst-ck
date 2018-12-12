import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Niramit:300,400,700');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');

* {
  box-sizing: border-box;
}

body {
  align-items: center;
  background-attachment: fixed;
  background-image: url("../../images/Background-Image.jpg");
  background-size: cover;
  display:flex;
  justify-content: center;
  margin: 0;
  padding: 22px;
  background-repeat: no-repeat;
  
}

h5 {
  font-family: 'Niramit', sans-serif;
}

h2 {
      font-family: 'Niramit', sans-serif;
      font-size: 18px !important;
      font-weight: 700;
      margin: 22px 0;
    }

p {
      font-family: 'Niramit', sans-serif;
      color: #424242;
    }

    a {
      color: #ff5f8a;
    }

    h3 {
    font-size: 16px;
    font-weight: 600;
    }
`
