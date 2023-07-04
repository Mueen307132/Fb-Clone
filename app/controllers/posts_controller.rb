class PostsController < ApplicationController

  before_action :fetch_post, only: [:edit, :update, :destroy]
  # before_action :verify_params, only: [:create,:update]
  
  def index
    @posts = Post.order(created_at: :desc).page params[:page]
  end
  
  def new
    @post = current_user.posts.new
  end
  
  def create 
    @post = current_user.posts.create(post_params)
    if @post.save
      redirect_to :root
    else 
      flash.now[:notice] = "HELLo"
      puts "HELOOOO#{@post.errors.full_messages_for(:image)}"
      
    end

  end

  def show; end
  
  def destroy
    @post.destroy
  end

  def edit; end

  def update
    if @post.update(post_params)
      redirect_to :root
    else
      render :new, status: :unprocessable_entity
    end
  end
  
  private

  def fetch_post
    @post = current_user.posts.find(params[:id])
  end
  
  def post_params
    params.require(:post).permit(:body, :image)
  end
  
  def verify_params
    puts "#{params[:post][:body]}TESTING VERIFICATION"
    if params[:post][:body].presence do
      errors.add(:body,'Write something MF')
    end
    
    end
  end
end
