// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;

$(function () {
  $(".edit-button-class").on("click", function () {
    var id = $(this).data("post-id");
    $(`#edit_id_${id}`).show();
    $(`#post_${id}`).hide();
  });

  $(".comments-button").on("click", async function () {
    var id = $(this).data("post-id");

    $(`#comments_post_${id}`).toggle();
  });
  $(".like").on("click", function (e) {
    var id = $(this).data("post-id");
    debugger;
    $.ajax({
      url: `/posts/${id}/likes`,
      type: "POST",
      data: { post_id: id },
      success: function () {
        $(`#like_${id}`).hide();
        $(`#unlike_${id}`).show();
      },
    });
  });
  $(".unlike").on("click", async function (e) {
    var post_id = $(this).data("post-id");
    var id = $(this).data("like-id");
    debugger;
    $.ajax({
      url: `/posts/${post_id}/likes/${id}`,
      type: "DELETE",

      data: { post_id: post_id, id: id },
      success: function () {
        $(`#like_${id}`).show();
        $(`#unlike_${id}`).hide();
      },
    });
  });
  $(".delete-post").on("click", async function (e) {
    var id = $(this).data("post-id");
    console.log(id);
    debugger;
    $.ajax({
      url: `/posts/${id}`,
      type: "DELETE",
      data: { id: id },
      success: function () {
        console.log("HI");
        $(`#post_${id}`).hide();
      },
    });
  });
});
