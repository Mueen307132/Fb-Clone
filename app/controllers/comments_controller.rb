class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    redirect_to :root
  end

  def destroy 
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to :root, status: :see_other
  end

  private
  
  def comment_params
      params.require(:comment).permit(:user_id, :comment)
  end

end
