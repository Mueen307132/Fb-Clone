import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="posts"
export default class extends Controller {
  static targets = ["post-id"];

  connect() {}

  create() {
    $.ajax({
      url: `/posts/new.js`,
      type: "GET",
      success: function () {},
    });
  }

  comments() {
    const id = this.data.get("myValue");
    var x = document.getElementById(`#comments_post_${id}`);
    $(`#comments_post_${id}`).toggle();
  }

  delete(e) {
    e.preventDefault();
    const id = this.data.get("postId");
    $.ajax({
      url: `/posts/${id}`,
      type: "DELETE",
      success: function () {
        console.log("!!!!!!");
        $(`#post_${id}`).hide();
      },
    });
  }

  edit() {
    const id = this.data.get("postId");
    $(`#edit_id_${id}`).show();
    $(`#post_${id}`).hide();
  }

  cancel() {
    $("#post-form").html("");
  }
}
