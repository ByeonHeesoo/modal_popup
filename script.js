; (function () {
  'use strict'
  const get = (target) => {
    return document.querySelector(target)
  }

  const $button = get('.modal_open_button');
  const $modal = get('.modal');
  const $modalConfirmButton = get('.modal_button.confirm');
  const $modalCancelButton = get('.modal_button.cancel');
  const $body = get('body');

  //toggleModal() : 모달띄우기 버튼 클릭했을 때 클래스 추가, 제거해주는 함수
  const toggleModal = () => {
    $modal.classList.toggle('show')
    $body.classList.toggle('scroll_lock')
  }

  $button.addEventListener('click', () => {
    toggleModal()
  })

  $modalConfirmButton.addEventListener('click', () => {
    toggleModal()
  })

  $modalCancelButton.addEventListener('click', () => {
    toggleModal()
  })

  //모달창 열렸을 때 배경 클릭 시 모달창 닫기
  window.addEventListener('click', (e) => {
    if (e.target === $modal) {
      toggleModal()
    }
  })

})()
