window.onload = function (){
  var game = new Game();

  var startpage = document.querySelector('.startPage');
  var restartpage = document.querySelector('.restartPage');
  var succesePage = document.querySelector('.succesePage');
  var startBtn = document.querySelector('.startBtn');
  var shareBtn = document.querySelector('.shareBtn');
  var restartBtn = document.querySelector('.restartBtn');
  var scoreEl = document.querySelector('.scoreNum');
  var succeScoreNum = document.querySelector('.succeScoreNum');
  var maskWarp = document.getElementById('maskWarp');
  
  
  startpage.style.display = 'flex';
  restartpage.style.display = 'none';
  succesePage.style.display = 'none';
  
  //分享
  shareBtn.addEventListener('click', function (){
    maskWarp.style.display = 'flex';
  });
  // 取消遮罩层
  // shareBtn.addEventListener('click', function (){
  //   maskWarp.style.display = 'none';
  // });
  //开始
  startBtn.addEventListener('click', function (){
    startpage.style.display = 'none';
    game.start();
  });
  
  //重新开始
  restartBtn.addEventListener('click', function (){
    restartpage.style.display = 'none';
    game.restart();
  });
  
  //成功
  game.succeseCallback = function (score){
    succesePage.style.display = 'flex';
    succeScoreNum.innerHTML = score;
  };
  
  //失败
  game.failCallback = function (score){
    restartpage.style.display = 'flex';
    scoreEl.innerHTML = score;
  };
};
