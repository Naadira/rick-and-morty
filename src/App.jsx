import React from 'react'
import CharacterComponent from './components/CharacterComponent/CharacterComponent'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client ={queryClient}>
    <CharacterComponent />
    </QueryClientProvider>
  )
}

export default App