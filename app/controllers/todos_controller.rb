class TodosController < ApplicationController

  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    todo = Todo.create(todo_params)
    render json: todo, status: 201
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(todo_params)
    render nothing: true, status: 204
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render nothing: true, status: 204
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def todo_params
    params.permit(:description, :status)
  end
end