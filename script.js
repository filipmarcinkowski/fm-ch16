'use strict';

const question = document.querySelectorAll('.faq-elem');

question.forEach(function (el) {
  const answer = el.querySelector('.answer__box');
  const plus = el.querySelector('.plus');
  const minus = el.querySelector('.minus');

  el.addEventListener('click', function () {
    plus.classList.toggle('hidden');
    minus.classList.toggle('hidden');
    answer.classList.toggle('open');
  });
});

// //////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//   const questions = document.querySelectorAll('.faq-elem');

//   questions.forEach(function (question) {
//     const plusIcon = question.querySelector('.plus');
//     const minusIcon = question.querySelector('.minus');
//     const answerBox = question.querySelector('.answer__box');

//     question.addEventListener('click', function () {
//       const isOpen = question.classList.contains('open');

//       questions.forEach(function (otherQuestion) {
//         otherQuestion.classList.remove('open');
//         otherQuestion.querySelector('.plus').classList.remove('hidden');
//         otherQuestion.querySelector('.minus').classList.add('hidden');
//         otherQuestion.querySelector('.answer__box').classList.remove('open');
//       });

//       if (!isOpen) {
//         question.classList.add('open');
//         plusIcon.classList.add('hidden');
//         minusIcon.classList.remove('hidden');
//         answerBox.classList.add('open');
//       }
//     });
//   });
// });
