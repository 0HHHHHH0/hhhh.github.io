// source/js/layout-adjust.js

// ҳ����غ�ǿ�Ƶ���λ��
document.addEventListener('DOMContentLoaded', function() {
  console.log('?? ��ʼ��������λ��...');
  
  // �ӳ�ִ��ȷ����ʽ�Ѽ���
  setTimeout(function() {
    adjustLayout();
  }, 100);
});

function adjustLayout() {
  const postHeader = document.querySelector('.post-header');
  const postTitle = document.querySelector('.post-title');
  const postMeta = document.querySelector('.post-meta');
  
  console.log('�ҵ�Ԫ��:', { postHeader, postTitle, postMeta });
  
  if (postHeader) {
    postHeader.style.marginTop = '-40px';
    postHeader.style.marginBottom = '30px';
    console.log('? ���� post-header λ��');
  }
  
  if (postTitle) {
    postTitle.style.marginTop = '-20px';
    postTitle.style.marginBottom = '15px';
    console.log('? ���� post-title λ��');
  }
  
  if (postMeta) {
    postMeta.style.marginTop = '-25px';
    postMeta.style.marginBottom = '25px';
    console.log('? ���� post-meta λ��');
  }
  
  // ���������ȷ�����ƶ���Ҳ��Ч
  if (window.innerWidth < 768) {
    const mobileAdjustments = document.querySelectorAll('.post-header, .post-title, .post-meta');
    mobileAdjustments.forEach(el => {
      if (el) {
        el.style.marginTop = parseInt(el.style.marginTop || '0') - 10 + 'px';
      }
    });
  }
}

// ����ҳ��仯�������� PJAX ���أ�
document.addEventListener('pjax:complete', function() {
  setTimeout(adjustLayout, 50);
});