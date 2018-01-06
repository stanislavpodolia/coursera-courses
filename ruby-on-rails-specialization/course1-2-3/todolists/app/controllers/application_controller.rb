class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user
  before_action :ensure_login

  def logged_in?
  	session[:user_id] && User.exists?(session[:user_id])
  end

  def current_user
    if (User.exists?(session[:user_id]))
  	  User.find(session[:user_id])
    else
      reset_session
    end
  end

  def ensure_login
  	if not (logged_in?)
  		redirect_to login_path
  	end
  end
end
