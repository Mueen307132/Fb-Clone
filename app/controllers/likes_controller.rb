class LikesController < ApplicationController
  
  def create
    @post = Post.find(params[:post_id])
    @like = @post.likes.create(user_id:current_user.id)
    respond_to do |format|
    format.json { render json: @like.to_json, status: 200 }
    format.html
    end
  end

  def destroy 
    @post = Post.find(params[:post_id])
    @like = @post.likes.find(params[:id])
    @like.destroy
  
  end

  private
  
  def like_params
    params.require(:like).permit(:user_id)
  end

end
