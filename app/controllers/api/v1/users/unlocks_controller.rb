class Api::V1::Users::UnlocksController < Devise::UnlocksController
  protect_from_forgery with: :null_session
  def new
    super
  end

  def create
    super
  end

  def show
    super
  end

  protected

  def after_sending_unlock_instructions_path_for(resource)
    super(resource)
  end

  def after_unlock_path_for(resource)
    super(resource)
  end
end
