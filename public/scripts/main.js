(function () {
  let baseURL = "http://localhost:3000";
  let contentWrapper = document.querySelector('#contentWrap');
  let addBtn = document.querySelector('.addButton');
  let myModal = document.querySelector('.modal');

  if (document.readyState != "loading") {
    app();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      app();
    }, false);
  }

  function display(){
    $.ajax({
      method: "GET",
      url: `${baseURL}/blogs`
    }).done(function (response) {
      for (let blog of response) {
        $.ajax({
          method: 'GET',
          url: `${baseURL}/blogs/${blog.id}`
        }).done(function(res){
          console.log(res);
          let blog = document.createElement('div');
          blog.classList.add('blog');
          blog.id=`${res.id}`;
          blog.innerHTML = `
          <a href="/blogs/${blog.id}.html" target="_blank"></a>
          <div class="img-wrap">
          <img src="img/sample${res.id}.jpg">
          <span class="img_border">
          </span>
          </div>
          <div class="text">
          <div class="postTime">${res.postTime}</div>
          </div>
          <div class="text">
          <div class="blogTitle">${res.title}</div>
          </div>
          <div class="description">
          <p>${res.description}</p>
          </div>
          `;
          contentWrapper.appendChild(blog);
        });
      }
    });
  }

  function getBlogContent(item) {
      contentWrapper.addEventListener('click', function (evnt) {
        evnt.preventDefault();
        let evntTarget = evnt.target.parentNode.parentNode;
          if(evntTarget.classList.contains('blog')){
              $.ajax({
                  method:"GET",
                  url: `${baseURL}/blogs/${evntTarget.id}`
              }).done(function(res){
                  let blogTemp = document.createElement('div');
                  blogTemp.classList.add('details');
                  blogTemp.innerHTML = `
                  <div class = "closeIcon">X</div>
                  <div class="title">
                  <h3>${res.title}</h3>
                  </div>
                  <div class="time">
                  <p>${res.postTime}</p>
                  </div>
                  <div class="description">
                  <p>${res.description}</p>
                  </div>
                  <div class="pic">
                  <img src="img/sample${res.id}.jpg">
                  </div>
                  `;
                  myModal.appendChild(blogTemp);
                  myModal.style.display = "block";
                  contentWrapper.style.display="none";
                  contentWrapper.style.opacity=0;
                  closeModal(blogTemp);
              });
          }
      });
  }


  function closeModal(tab){
      myModal.onclick = function(evnt) {
          console.log(evnt.target);
          if( evnt.target === this || evnt.target.classList.contains('closeIcon')){
              if (myModal.style.display === "block") {
                  myModal.style.display = "none";
                  myModal.removeChild(tab);
                  contentWrapper.style.display="block";
                  contentWrapper.style.opacity=1;
                  // myModal.sibilingNo
              }
          }
      }
  }

  function app() {
    display();
    // let modal = new SimpleModal('mymodal');
    getBlogContent();
  }
})();
