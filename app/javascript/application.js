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
    e.preventDefault();
    var id = $(this).data("post-id");
    $.ajax({
      url: `/posts/${id}/likes`,
      type: "POST",
      data: { post_id: id },
      success: function (response) {
        console.log(response, id);
        $(`#like_${id}`).parent().addClass("d-none");
        $(`#unlike_${id}`).parent().removeClass("d-none");
        $(`#unlike_${id}`).data("like-id", response.id);
      },
    });
  });
  $(".unlike").on("click", async function (e) {
    e.preventDefault();
    var post_id = $(this).data("post-id");
    var id = $(this).data("like-id");
    $.ajax({
      url: `/posts/${post_id}/likes/${id}`,
      type: "DELETE",

      data: { post_id: post_id, id: id },
      success: function () {
        console.log(post_id);
        $(`#like_${post_id}`).parent().removeClass("d-none");
        $(`#unlike_${post_id}`).parent().addClass("d-none");
      },
    });
  });
  $(".delete-post").on("click", async function (e) {
    var id = $(this).data("post-id");
    $.ajax({
      url: `/posts/${id}`,
      type: "DELETE",
      data: { id: id },
      success: function () {
        $(`#post_${id}`).hide();
      },
    });
  });

  // $("#create_post").on("submit", function (event) {
  //   event.preventDefault();
  //   debugger;
  //   var formData = $(this).serialize();
  //   $.ajax({
  //     url: "/posts.js",
  //     method: "POST",
  //     data: formData,
  //     dataType: "script",
  //     success: function (response) {
  //       debugger;
  //       console.log("RESPONSE FOUND");
  //     },
  //     error: function (xhr, status, error) {},
  //   });
  // });
});
