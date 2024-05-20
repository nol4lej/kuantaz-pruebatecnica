import { Container } from '@mui/material'
import DynamicForm from './components/DynamicForm'

function App() {
  return (
    <>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} >
        <DynamicForm />
      </Container>
    </>
  )
}

export default App
