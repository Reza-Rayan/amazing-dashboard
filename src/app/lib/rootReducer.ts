import { Todos } from "./features/TodoApi";

export const RootReducer = {
    [Todos.reducerPath]: Todos.reducer
};



