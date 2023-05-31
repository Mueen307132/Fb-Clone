// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;

$(document).ready(function () {
  console.log("I AM OK");
  $(".edit-button-class").on("click", function () {
    var id = $(this).data("post-id");
    $(`#edit_id_${id}`).show();
    $(`#post_${id}`).hide();
  });
});
