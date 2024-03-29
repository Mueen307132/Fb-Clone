class ApplicationController < ActionController::Base
     protect_from_forgery with: :exception
     skip_before_action :verify_authenticity_token
     before_action :authenticate_user!

     before_action :configure_permitted_parameters, if: :devise_controller?
     protected

          def configure_permitted_parameters
               devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :avatar)}
               devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email,:avatar, :password, :password_confirmation, :current_password)}
          end

          
end
