import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Router>
    <ChakraProvider>
    <App />
  </ChakraProvider>
  </Router>
  </QueryClientProvider>
  
  

)
