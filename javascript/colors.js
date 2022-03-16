let Links = {
  setColor: function(color) {
    // let alist = document.querySelectorAll('a');
    // let i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }
}

let Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self) {
  let target = document.querySelector('body'); // 변수 사용
  if (self.value === 'night') { // this 사용해서 코드 간결하게
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('yellow');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}