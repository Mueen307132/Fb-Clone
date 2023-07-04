import { Controller } from "@hotwired/stimulus";
import { createComment, createReply } from "../helpers/commentsHelper";
// Connects to data-controller="comments"
export default class extends Controller {
  static targets = ["comment", "user"];

  connect() {}

  create(event) {
    event.preventDefault();
    const id = this.data.get("id");
    const commentId = $(`#comment_reply_${id}`).attr(
      "data-comments-comment-id"
    );
    console.log(commentId, "AAAAAAAAAAAAAAAA");
    const data = {
      comment: {
        body: this.commentTarget.value,
        user_id: this.userTarget.value,
        comment_id: commentId,
      },
    };
    $.ajax({
      url: `/posts/${id}/comments`,
      type: "POST",
      data: data,
      dataType: "json",
      success: function (response) {
        if (response.commentError) {
          $(".modal-inner").html(`<p>${response.commentError}</p>`);
          setTimeout(() => {
            $(".modal-inner").html("");
          }, 4000);
        } else {
          if (!response.comment.comment_id) {
            console.log(response.user_avatar);
            const myStr = createComment(response, id, commentId);
            $(`#comments_new_post_${id}`).append(myStr);
          } else {
            const myStr = createReply(response, id);
            $(`#reply_container_${commentId}`).append(myStr);
          }
          $(".modal-inner").html(``);
          $(`#comment_data_${id}`).val("");
        }
      },
    });
  }

  reply(e) {
    e.preventDefault();
    const id = this.data.get("id");
    const replyId = this.data.get("reply");
    console.log(id, replyId);
    const user = this.data.get("user");
    const postId = this.data.get("post-id");
    const showId = $(`#comment_reply_${postId}`).attr(
      "data-comments-comment-id"
    );
    const showReplyId = $(`#comment_reply_${postId}`).attr(
      "data-comments-reply-id"
    );
    $(`#reply_icon_${showId}`).show();
    $(`#reply_icon_${showReplyId}`).show();
    $(`#comment_data_${postId}`).val(user).focus();
    $(`#comment_reply_${postId}`).attr("data-comments-comment-id", id);
    if (replyId) {
      $(`#comment_reply_${postId}`).attr("data-comments-reply-id", replyId);
      $(`#reply_icon_${replyId}`).hide();
    } else {
      $(`#reply_icon_${id}`).hide();
    }
    $(`#cancel_button_${postId}`).show();
  }

  cancelReply(e) {
    e.preventDefault();
    const id = this.data.get("id");
    $(`#cancel_button_${id}`).hide();
    const commentId = $(`#comment_reply_${id}`).attr(
      "data-comments-comment-id"
    );
    const replyId = $(`#comment_reply_${id}`).attr("data-comments-reply-id");
    $(`#reply_icon_${commentId}`).show();
    $(`#reply_icon_${replyId}`).show();
    $(`#comment_reply_${id}`).attr("data-comments-comment-id", "");
    $(`#comment_reply_${id}`).attr("data-comments-reply-id", "");
    $(`#comment_data_${id}`).val("");
  }
}
