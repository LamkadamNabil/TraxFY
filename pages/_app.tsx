import '../styles/globals.css'
import { ChakraProvider , extendTheme} from '@chakra-ui/react'
import 'reset-css';
import PlayerLoyout from './components/playerLayout';
const theme = extendTheme({
  colors :{
    gray :{
      100 :"#f5f5f5",
      200 :"#eeeeee",
      300 :"#e0e0e0" ,
      400 : "#bdbdbd",
      500 : "#9E9E9E",
      600 : "#757575",
      700 : "#616161",
      800 : "#424242",
      900 : "#212121"
    },
  },
  components:{
    Button :{
      variants :{
         link :{
           ":focus" :{
             outline :"none",
             boxShadow :"none",
           },
         },
      }
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLoyout>
       <Component {...pageProps} />
       </PlayerLoyout>
    </ChakraProvider>
  )
}

export default MyApp