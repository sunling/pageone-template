// 点赞功能
function toggleLike() {
  const likeBtn = document.getElementById('likeBtn');
  
  if (likeBtn.classList.contains('liked')) {
    // 取消点赞
    likeBtn.classList.remove('liked');
  } else {
    // 点赞
    likeBtn.classList.add('liked');
  }
}

// 评论功能
function toggleComment() {
  const commentBtn = document.getElementById('commentBtn');
  
  if (commentBtn.classList.contains('active')) {
    // 取消评论状态
    commentBtn.classList.remove('active');
  } else {
    // 激活评论状态
    commentBtn.classList.add('active');
    // 这里可以添加打开评论框的逻辑
    console.log('打开评论功能');
  }
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
  console.log('页面加载完成，交互功能已就绪！');
});