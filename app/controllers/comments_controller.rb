class CommentsController < ApplicationController

  def create
    puts "Hello #{params} test"
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    data ={
      comment:@comment,
      user:@comment.user,
      user_avatar:@comment.user.avatar
    }
    respond_to do |format|
      format.json { render json: data.to_json, status: 200}
    end
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
