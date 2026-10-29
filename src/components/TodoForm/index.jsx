import { Button } from "../Button";
import { TextInput } from "../TextInput";
import './to-do-form.css'

export function todoForm({ onSubmit }) {
    return(
        <form action={onSubmit} className="todo-form">
            <TextInput placeholder="Digite o item que deseja adicionar" required name='description'/>
          <Button>
            Salvar Item
          </Button>
        </form>
    )
}