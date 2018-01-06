class TodoItem < ActiveRecord::Base
  belongs_to :todo_list

  default_scope {order :due_date}

  def self.number_of_completed_todos
  	TodoItem.all.where(completed: true).count
  end
end
