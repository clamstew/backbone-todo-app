class Todo < ActiveRecord::Base

  def as_json(options={})
    {
      id: self.id,
      description: self.description,
      status: self.status,
      # created_at: self.created_at,
      # updated_at: self.updated_at
    }
  end
end
