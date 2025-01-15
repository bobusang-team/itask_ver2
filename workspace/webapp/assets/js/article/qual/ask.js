
document.addEventListener("DOMContentLoaded", function () {
  const tagBtns = document.querySelectorAll('.lch-ask-tag-btn');

  // tag 버튼 눌렀을 때 해당 색상 변화 이벤트
  tagBtns.forEach((tagBtn) => {
    tagBtn.addEventListener('click', function () {
      // 모든 버튼에서 lch-ask-select 클래스 제거
      tagBtns.forEach((Btn) => Btn.classList.remove('lch-ask-select'));

      // 클릭된 버튼에 lch-ask-select 클래스 추가
      tagBtn.classList.add('lch-ask-select');
    });
  });

  // 질문 / 꿀팁 눌렀을 때 해당 색상 변화 이벤트
  const categoryBtns = document.querySelectorAll('.lch-ask-category-btn');

  categoryBtns.forEach((categoryBtn) => {
    categoryBtn.addEventListener('click', function () {
      // 모든 버튼에서 lch-ask-select 클래스 제거
      categoryBtns.forEach((cateBtn) => cateBtn.classList.remove('lch-ask-select'));

      // 클릭된 버튼에 lch-ask-select 클래스 추가
      categoryBtn.classList.add('lch-ask-select');
    });
  });

  const posts = document.querySelectorAll('.lch-ask-post-item');

  // 태그 버튼 클릭 이벤트
  tagBtns.forEach((tagBtn) => {
    tagBtn.addEventListener('click', function () {
      // 모든 버튼에서 'lch-ask-select' 제거 후 클릭된 버튼에 추가
      tagBtns.forEach((btn) => btn.classList.remove('lch-ask-select'));
      tagBtn.classList.add('lch-ask-select');

      // 클릭된 버튼의 텍스트 내용 가져오기
      const selectedTag = tagBtn.textContent.trim();

      // 게시글 필터링
      posts.forEach((post) => {
        const postTag = post.dataset.tag; // 게시글의 data-tag 값
        if (selectedTag === '전체' || postTag === selectedTag) {
          post.style.display = ''; // 보이기
        } else {
          post.style.display = 'none'; // 숨기기
        }
      });
    });
  });
});