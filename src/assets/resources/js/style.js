// var btnCust = '<button type="button" class="btn btn-secondary" title="Add picture tags" ' + 
//     'onclick="alert(\'Call your custom code here.\')">' +
//     '<i class="glyphicon glyphicon-tag"></i>' +
//     '</button>'; 
// $("#avatar-1").fileinput({
//     overwriteInitial: true,
//     maxFileSize: 1500,
//     showClose: false,
//     showCaption: false,
//     browseLabel: '',
//     removeLabel: '',
//     browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
//     removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
//     removeTitle: 'Cancel or reset changes',
//     elErrorContainer: '#kv-avatar-errors-1',
//     msgErrorClass: 'alert alert-block alert-danger',
//     defaultPreviewContent: '<img src="/samples/default-avatar-male.png" alt="Your Avatar">',
//     layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {browse}'},
//     allowedFileExtensions: ["jpg", "png", "gif"]
// });

( function( window ) {

    'use strict';
    
    // class helper functions from bonzo https://github.com/ded/bonzo
    
    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    
    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }
    
    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }
    
    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };
    
    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }
    
    })( window );
    
    (function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }
    
        [].slice.call( document.querySelectorAll( 'hh-input.hh-input-field' ) ).forEach( function( inputEl ) {
            // in case the input is already filled..
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'hh-input-fielld' );
            }
    
            // events:
            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );
    
        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'hh-input-fielld' );
        }
    
        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'hh-input-fielld' );
            }
        }
    })();
    
$(function(){
  $('.nutMenu').click(function(){
    $('.menuHome').addClass('ra');
    return false;
  })
  $('.body').click(function(){
    $('.menuHome').removeClass('ra');
    return false;
  })
  $('.giaoVien').click(function(){ 
    $('.hocSinh').removeClass('hh-pick-right'); 
    $('.giaoVien').addClass('hh-pick-left');
    return false;
  }) 
  $('.hocSinh').click(function(){
    $('.giaoVien').removeClass('hh-pick-left'); 
    $('.hocSinh').addClass('hh-pick-right');
    return false;
  })
  // $('#class-1').click(function(){
  //   $(this).css('background','red');
  // })
})