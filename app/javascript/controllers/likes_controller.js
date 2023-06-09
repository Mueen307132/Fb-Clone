import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="likes"
export default class extends Controller {
  connect() {}

  like() {
    const id = this.data.get("postId");
    console.log("id,", id);
    $.ajax({
      url: `/posts/${id}/likes`,
      type: "POST",
      data: { post_id: id },
      success: function (response) {
        console.log(response, id);
        $(`#like_${id}`).parent().addClass("d-none");
        $(`#unlike_${id}`).parent().removeClass("d-none");
        $(`#unlike_${id}`).attr("data-likes-id", response.id);
      },
    });
  }

  unlike() {
    const id = this.data.get("id");
    const post_id = this.data.get("postId");
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
  }
}
