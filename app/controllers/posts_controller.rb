class PostsController < ApplicationController

  before_action :fetch_post, only: [:edit, :update, :destroy]
  
  def index
    @posts = Post.order(created_at: :desc).page params[:page]
  end
  
  def new
    @post = Post.new
  end
  
  def create 
    @post = current_user.posts.create(post_params)
    redirect_to :root
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
end
