class CommentsController < ApplicationController
  
  before_action :find_post
  before_action :find_comment, except: :create
  def create
    @comment = @post.comments.create(comment_params)
    data = Hash.new
    if @comment.save
      data ={
        comment:@comment,
        user:@comment.user,
        user_avatar:rails_blob_url(@comment.user.avatar)
      }
    else
      data = {
        commentError:@comment.errors.full_messages_for(:body)
      }
    end
    respond_to do |format|
      format.json { render json: data.to_json, status: 200}
    end
  end

  def destroy 
    @comment.destroy
    redirect_to :root, status: :see_other
  end

  private
  
  def comment_params
      params.require(:comment).permit(:user_id, :body, :comment_id)
  end
  def find_post
    @post = Post.find(params[:post_id])
  end

  def find_comment
     @comment = @post.comments.find(params[:id])
  end

end
