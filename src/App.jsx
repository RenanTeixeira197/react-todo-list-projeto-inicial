import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import Dialog from "./components/Dialog"
import { EmptyState } from "./components/EmptyState";
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import FormToDo from "./components/FormToDo"
import { TodoContext } from "./components/TodoProvider/TodoContext"
import ToDoGroup from "./components/ToDoGroup"

function App() {
  const { todos, upsertTodo, openTodoFormModal, closeTodoFormModal, isModalOpen } = use(TodoContext)

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            todos={todos.filter(t => !t.completed)}
          />
          {todos.length === 0 && <EmptyState />}
          <ToDoGroup
            heading="Concluído"
            todos={todos.filter(t => t.completed)}
          />
          <Footer>
            <FabButton onClick={openTodoFormModal}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
      <Dialog isOpen={isModalOpen} onClose={closeTodoFormModal}>
        <FormToDo onSubmit={upsertTodo} />
      </Dialog>
    </main>
  )
}

export default App