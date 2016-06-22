var Modal = function(conf) {
  var me = this;
  me.parent = conf.parent;
  me.clickCont = document.createElement('div');
  me.clickCont.className = 'sr-click-cont';
  me.clickCont.onclick = function(){
    me.initDom();
  };
  me.parent.appendChild(me.clickCont);
};

Modal.prototype.initCont = function() {
  var me = this,
    buttonWidth = me.parent.offsetWidth,
    buttonHeight =  me.parent.offsetHeight,
    contWidth = 300,
    contHeight = 300,
    contY = me.parent.offsetTop - contHeight,
    contLeft = me.parent.offsetLeft + (buttonWidth/2) - (contWidth/2);
  
  me.cont = document.createElement('div');
  me.cont.className = 'sr-popup sr-show-popup';
  me.cont.style.cssText = 'width:' + contWidth + 'px;height:' + contHeight + 'px;top:' + contY + 'px;left:' + contLeft + 'px;';
  me.parent.insertBefore( me.cont, me.parent.firstChild );
};

Modal.prototype.initModal = function() {
  var me = this,
    buttonWidth = me.parent.offsetWidth,
    buttonHeight =  me.parent.offsetHeight,
    modalWidth = 140,
    modalHeight = 110,
    modalLeft = me.parent.offsetLeft + (buttonWidth/2) - (modalWidth/2),
    modalY = me.parent.offsetTop - (modalHeight + 20);

  me.modal = document.createElement('div');
  me.modal.className = 'sr-popup-inner sr-show-popup-inner';
  me.modal.style.cssText = 'width:' + modalWidth + 'px;height:' + modalHeight + 'px;top:' + modalY + 'px;left:' + modalLeft + 'px;';
  me.cont.appendChild(me.modal);
  me.modal.onclick = function(){    
    me._destroy();
  };
};

Modal.prototype.initDom = function() {
  var me = this;

  me.initOverlay();
  me.initCont();
  me.initModal();
};

Modal.prototype.initOverlay = function() {
  var me = this;

  me.overlay = document.createElement('div');
  me.overlay.id = 'sr-overlay-modal';
  me.overlay.className = 'sr-overlay-modal-fadein';
  document.body.appendChild(me.overlay);
  
};

Modal.prototype._destroy = function(){
  var me = this,
    overlay = document.getElementById('sr-overlay-modal');
  me.cont.remove();
  me.cont = null;
  me.modal.remove();
  me.modal = null;
  overlay.remove();
  overlay = null;
  console.log(me);
  
}

var modal = new Modal({
  parent: document.getElementById('sr-button')
});