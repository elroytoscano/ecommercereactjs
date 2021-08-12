import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*,::after,::before{
 padding:0;
 margin:0;
 box-sizing:border-box;
}

:root{
--clr-primary-1: hsl(21, 91%, 17%);
    --clr-primary-2: hsl(21, 84%, 25%);
    --clr-primary-3: hsl(21, 81%, 29%);
    --clr-primary-4: hsl(21, 77%, 34%);
    --clr-primary-5: hsl(21, 62%, 45%);
    --clr-primary-6: hsl(21, 57%, 50%);
    --clr-primary-7: hsl(21, 65%, 59%);
    --clr-primary-8: hsl(21, 80%, 74%);
    --clr-primary-9: hsl(21, 94%, 87%);
    --clr-primary-10: hsl(21, 100%, 94%);
    --clr-grey-1: #102a42;
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
 --ff-text-color:#222;
 --ff-logo:'Kaushan Script', cursive;
--ff-primary: 'Segoe UI', sans-serif;
--ff-secondary:'Roboto', sans-serif;
--spacing:0.125rem;
--radius:0.25rem;
--transition:0.3s all linear;
}

body{
    overflow-x: hidden;
font-family: var(--ff-secondary);
line-height: 1;
font-size: 1rem;
background-color: white;
color:var(--clr-grey-1);
min-width:100vw;
}

img{
 display: block;
 object-fit:cover;
}

h1,h2,h3,h4{
 font-family: var(--ff-primary);
 line-height: 1.25;
 text-transform: capitalize;
 letter-spacing:var(--spacing);
 margin-bottom: 0.75rem;
}

h1{
 font-size: 3rem;
}
h2{
 font-size: 1.5rem;
}
h3{    
    letter-spacing:var(--spacing); 
}
h4{
 font-size: 0.875rem;
}

@media screen and (min-width:768px){
 body{
  font-size: 1rem;
 }
 h1,h2,h3,h4{
  line-height: 1.5;
 }
 h1{
  font-size: 4rem;
 }
 h2{
  font-size: 1.75rem;
 }
 h3{
  font-size: 1.5rem;
 }
 h4{
     font-size: 1rem;
 } 
}

a{
 text-decoration: none;
}

ul li{
 list-style-type: none;
}

a,ul li{
 text-transform: capitalize;
}

p{
    margin-bottom: 1.25rem;
    color:var(--clr-grey-5);
}

button{
    border: none;
}

`
export default GlobalStyles
