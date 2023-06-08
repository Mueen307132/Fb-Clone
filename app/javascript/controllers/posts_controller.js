import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="posts"
export default class extends Controller {
  connect() {}

  test() {
    $.ajax({
      url: `/posts/new.js`,
      type: "GET",
      success: function () {
        console.log(`hello, I am back!!`);
      },
    });
  }
}
