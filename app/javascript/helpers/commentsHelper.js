export const createComment = (response, id, commentId) => {
  const commentIcon = document.createElement("i");
  commentIcon.classList.add("fa", "fa-reply");
  commentIcon.setAttribute("data-controller", "comments");
  commentIcon.setAttribute("data-action", "click->comments#reply");
  commentIcon.setAttribute("data-comments-id", response.comment.id);
  commentIcon.setAttribute("data-comments-user", response.user.username);
  commentIcon.setAttribute("data-comments-post-id", id);
  commentIcon.setAttribute("id", `reply_icon_${response.comment.id}`);
  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fa-regular", "fa-thumbs-up", "mx-3");
  const myStr = `
          <div class='d-flex align-items-center px-3 mb-2'><div style='width: 40px; height: 40px; margin-right:10px'}>
            <img src=${
              response.user_avatar || "/images/user.png"
            } style='height:100%; width:100%; object-fit:cover' class='rounded-circle'/></div>
            <div class="d-flex align-items-center justify-content-between" style="width: calc(100% - 50px)">
              <p>${response.comment.body}</p>
              <div>
                ${likeIcon.outerHTML}
                ${commentIcon.outerHTML}
              </div>
            </div>
         </div>
        <div id="reply_container_${response.comment.id}"></div>`;

  return myStr;
};

export const createReply = (response, id) => {
  const commentIcon = document.createElement("i");
  commentIcon.classList.add("fa", "fa-reply");
  commentIcon.setAttribute("data-controller", "comments");
  commentIcon.setAttribute("data-action", "click->comments#reply");
  commentIcon.setAttribute("data-comments-id", response.comment.comment_id);
  commentIcon.setAttribute("data-comments-reply", response.comment.id);
  commentIcon.setAttribute("data-comments-user", response.user.username);
  commentIcon.setAttribute("data-comments-post-id", id);
  commentIcon.setAttribute("id", `reply_icon_${response.comment.id}`);
  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fa-regular", "fa-thumbs-up", "mx-3");
  const myStr = `<div class='d-flex align-items-center px-3 ms-5 mb-3'><div style='width: 40px; height: 40px; margin-right:10px'}>
            <img src=${
              response.user_avatar || "/images/user.png"
            } style='height:100%; width:100%; object-fit:cover' class='rounded-circle'/></div>
            <div class="d-flex align-items-center justify-content-between" style="width: calc(100% - 50px)">
        <p>${response.comment.body}</p>
         <div>
            ${likeIcon.outerHTML}
            ${commentIcon.outerHTML}
             </div>
             </div>
        </div>`;

  return myStr;
};
