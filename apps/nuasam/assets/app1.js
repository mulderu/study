function onHashChanged() {
  let menus = location.href.split('menu/');
  if(menus.length==2) {
    xlib.gomenu(parseInt(menus[1]));
  }
}
function makeBackground () {
  var canvas = document.getElementById('canvas-answer-sheet'),
        con = canvas.getContext('2d');

    canvas.style.background = '#FFF';
    // document.body.appendChild(canvas);

    /**
     * Grid Lines
     */
    function grid() {
        var w = canvas.width,
            h = canvas.height;

        var x=0, y = 0;
         // row
        for(; y<h; y+= 25) {
          con.moveTo(0, y);
          con.lineTo(w, y);
        }
          // columnc
        for(; x<w; x+= 23) {
          con.moveTo(x, 0);
          con.lineTo(x, h);
        }
        con.strokeStyle = 'rgba(100,100,120,.8)';
        con.stroke();
    }

    grid();
}

var xlib = {
  toI : function (x) {
    if(typeof x === 'string') return parseInt(x);
    else return parseInt(x.val());
  },


  getRandomArbitrary : function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  },

  getNextOp1 : function() {
    let  k= this.toI($('#oplen'))-1;
    return this.getRandomArbitrary(Math.pow(10,k), Math.pow(10,k+1));
  },

  getNextOp2: function() {
    let  k= this.toI($('#oplen'))-1;
    return this.getRandomArbitrary(Math.pow(10,k), Math.pow(10,k+1));
  },

  gomenu: function(n) {
    $('.myview').removeClass('active');
    $('.myview:eq('+n+')').addClass('active');
    return false;
  },
  
  config: {
    cfg: {
      clearTime: 3,
      oplen : 2
    },
    load: function() {
      let _cfg = localStorage.cfg;
      if(_cfg) {
        $.extend(this.cfg, JSON.parse(_cfg));
      }
      return this.cfg;
    },
    save : function(_cfg) {
      localStorage.cfg = JSON.stringify(_cfg);
      alert('Saved !')
    }
  }
 

};

$(document).ready(function() {
  let op1 = $('#op1'), op2 = $('#op2'), runBtn = $('#run-btn')
     , refreshBtn = $('#refresh-btn')
     , answerStep = $('#answer-step'), answerFinal = $('#answer-final')
     , cfgClearTime = $('#clearTime'), cfgOplen = $('#oplen')
     , cfgSaveBtn = $('#cfg-save-btn')
  ;

  makeBackground();
  let _cfg = xlib.config.load();
  cfgClearTime.val(_cfg.clearTime);
  cfgOplen.val(_cfg.oplen);
  
  cfgSaveBtn.on('click', function() {
    xlib.config.save({clearTime:xlib.toI(cfgClearTime), oplen:xlib.toI(cfgOplen)})
  });
  
  // test
  op1.val(xlib.getNextOp1());
  op2.val(xlib.getNextOp2());

  refreshBtn.on('click', function() {
    op1.val(xlib.getNextOp1());
    op2.val(xlib.getNextOp2());

    answerStep.empty();
    answerFinal.empty();

  });

  runBtn.on('click', function() {

    let mut = xlib.toI(op1) * xlib.toI(op2);
    answerStep.empty();
    answerFinal.empty();

    let op2chars = op2.val().split('').reverse();
    op2chars.forEach(function(d, i) {
      let dab = xlib.toI(op1)*xlib.toI(d);
      answerStep.append('<div class="xstep xstep-'+i+'" x-dab="'+dab+'"> ? </div>');
    });

    answerFinal.append('<div class="xstep" x-dab="'+mut+'"> ? </div>');

    let tm = 1;
    $('.xstep').each(function() {
      let self = $(this), ct = xlib.toI(cfgClearTime);
      if(ct==0) self.html ( self.attr('x-dab') );
      else setTimeout(function() {
         self.html ( self.attr('x-dab') );
       }, tm++ *900 * xlib.toI(cfgClearTime));
    });
  });
});