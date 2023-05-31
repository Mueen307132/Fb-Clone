class LikesController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    @like = @post.likes.create(user_id:current_user.id)
    redirect_to :root
  end

  def destroy 
    @post = Post.find(params[:post_id])
    @like = @post.likes.find(params[:id])
    @like.destroy
    redirect_to :root, status: :see_other
  end

  private
  
  def like_params
    params.require(:like).permit(:user_id)
  end

end
