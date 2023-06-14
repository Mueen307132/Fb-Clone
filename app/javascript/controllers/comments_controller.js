import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="comments"
export default class extends Controller {
  static targets = ["comment", "user"];

  connect() {}

  create(event) {
    event.preventDefault();
    const id = this.data.get("id");
    const data = {
      comment: {
        comment: this.commentTarget.value,
        user_id: this.userTarget.value,
      },
    };
    $.ajax({
      url: `/posts/${id}/comments`,
      type: "POST",
      data: data, 
      dataType: "json",
      success: function (response) {
        console.log(response);
        var myStr = `<div class='d-flex align-items-center'><div style='width: 40px; height: 40px; margin-right:10px'}><img src=${"/images/user.png"} style='height:100%; width:100%; object-fit:cover' class='rounded-circle'/></div>
        <p>${response.comment.comment}</p>
        </div>`;

        $(`#comments_new_post_${id}`).append(myStr);
        this.commentTarget.value = "KAKA";
      },
    });
  }
}
