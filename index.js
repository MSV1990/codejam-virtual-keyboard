/* eslint-disable no-param-reassign */
const htmlTemplate = `<canvas class="canvas">   
</canvas>
<div class="row">
<div class="keyboard">
    <textarea autofocus class="textarea" ></textarea>

    <div class="key-tilda" data-key="Backquote" data-ru = "ё" data-en = "\`" data-en-shift = "~">\`
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-1" data-key="Digit1" data-ru = "1" data-en = "1"  data-shift = "!">1
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-2" data-key="Digit2" data-ru = "2" data-en = "2" data-ru-shift = '"' data-en-shift = "@">2
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-3" data-key="Digit3" data-ru = "3" data-en = "3" data-ru-shift = "№" data-en-shift = "#">3
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-4" data-key="Digit4" data-ru = "4" data-en = "4" data-ru-shift = ";" data-en-shift = "$">4
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-5" data-key="Digit5" data-ru = "5" data-en = "5" data-shift = "%">5
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-6" data-key="Digit6" data-ru = "6" data-en = "6" data-ru-shift = ":" data-en-shift = "^">6
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-7" data-key="Digit7" data-ru = "7" data-en = "7" data-ru-shift = "?" data-en-shift = "&">7
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-8" data-key="Digit8" data-ru = "8" data-en = "8" data-shift = "*">8
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-9" data-key="Digit9" data-ru = "9" data-en = "9" data-shift = "(">9
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-0" data-key="Digit0" data-ru = "0" data-en = "0" data-shift = ")">0
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-minus" data-ru = "-" data-en = "-" data-shift = "_" data-key="Minus">-
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-plus" data-ru = "=" data-en = "=" data-shift = "+" data-key="Equal">=
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-backspace" data-key="Backspace">
        <ion-icon name="ios-arrow-round-back"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>

    <div class="key-tab" data-key="Tab">
        <ion-icon name="ios-swap"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-q" data-en = "q" data-ru = "й" data-key="KeyQ">q
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-w" data-key="KeyW" data-en = "w" data-ru = "ц">w
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-e" data-key="KeyE" data-en = "e" data-ru = "у">e
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-r" data-key="KeyR" data-en = "r" data-ru = "к">r
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-t" data-key="KeyT" data-en = "t" data-ru = "е">t
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-y" data-key="KeyY" data-en = "y" data-ru = "н">y
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-u" data-key="KeyU" data-en = "u" data-ru = "г">u
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-i" data-key="KeyI" data-en = "i" data-ru = "ш">i
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-o" data-key="KeyO" data-en = "o" data-ru = "щ">o
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-p" data-key="KeyP" data-en = "p" data-ru = "з">p
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-bracket-open" data-en = "[" data-ru = "х" data-en-shift="{" data-key="BracketLeft">[
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-bracket-close" data-en = "]" data-ru = "ъ" data-en-shift="}" data-key="BracketRight">]
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-left-slash" data-en = "\\" data-ru = "\\" data-ru-shift="/" data-en-shift="|" data-key="Backslash">\\
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>

    <div class="key-caps-lock" data-key="CapsLock">Caps Lock
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-a" data-key="KeyA" data-en = "a" data-ru = "ф">a
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-s" data-key="KeyS" data-en = "s" data-ru = "ы">s
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-d" data-key="KeyD" data-en = "d" data-ru = "в">d
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-f" data-key="KeyF" data-en = "f" data-ru = "а">f
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-g" data-key="KeyG" data-en = "g" data-ru = "п">g
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-h" data-key="KeyH" data-en = "h" data-ru = "р">h
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-j" data-key="KeyJ" data-en = "j" data-ru = "о">j
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-k" data-key="KeyK" data-en = "k" data-ru = "л">k
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-l" data-key="KeyL" data-en = "l" data-ru = "д">l
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>

    </div>
    <div class="key-punctuation" data-key="Semicolon" data-en-shift=":" data-en = ";" data-ru = "ж">;
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-quote" data-key="Quote" data-en-shift=""" data-en = "'" data-ru = "э" >"
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-enter" data-key="Enter">
        Enter
        <ion-icon name="ios-return-left"></ion-icon> 
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>

    <div class="key-left-shift" data-key="ShiftLeft">Shift
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-z" data-key="KeyZ" data-en = "z" data-ru = "я">z
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-x" data-key="KeyX" data-en = "x" data-ru = "ч">x
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-c" data-key="KeyC" data-en = "c" data-ru = "c" >c
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-v" data-key="KeyV" data-en = "v" data-ru = "м">v
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-b" data-key="KeyB" data-en = "b" data-ru = "и">b
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-n" data-key="KeyN" data-en = "n" data-ru = "т">n
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-m" data-key="KeyM" data-en = "m" data-ru = "ь">m
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-comma" data-key="Comma" data-en = "," data-en-shift="<" data-ru = "б">,
    <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div></div>
    <div class="key-dot" data-key="Period" data-en = "." data-en-shift = ">" data-ru = "ю">.
    <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div></div>
    <div class="key-right-slash" data-key="Slash" data-en = "/" data-en-shift = "?" data-ru = "." data-ru-shift=",">/
    <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div></div>
    <div class="key-right-shift" data-key="ShiftRight">Shift
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-arrows" data-key="ArrowUp">
        <ion-icon name="arrow-round-up"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>

    <div class="key-left-ctrl" data-key="ControlLeft">Ctrl
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-left-windows" data-key="MetaLeft">
        <ion-icon name="logo-windows"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-left-alt" data-key="AltLeft">Alt
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-space" data-key="Space">
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-right-alt" data-key="AltRight">Alt
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-context-menu" data-key="ContextMenu">
        <ion-icon name="ios-paper"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-right-ctrl" data-key="ControlRight">Ctrl
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-arrows" data-key="ArrowLeft">
        <ion-icon name="arrow-round-back"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-arrows" data-key="ArrowDown">
        <ion-icon name="arrow-round-down"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
    <div class="key-arrows" data-key="ArrowRight">
        <ion-icon name="arrow-round-forward"></ion-icon>
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="back"></div>
    </div>
</div>
</div>`;

document.body.innerHTML = htmlTemplate;
const serviceKeys = ['CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'MetaLeft', 'ContextMenu', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Backspace', 'ControlLeft', 'ControlRight'];
const displayInput = document.querySelector('textarea');
let capsState = 'off';
let shiftState = 'off';
let ctrlState = 'off';
let language = 'en';
const buttons = [...document.getElementsByTagName('div')];
buttons.splice(0, 2); //  remove containers from list


function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  }
}
function setCaretToPos(input, pos) {
  setSelectionRange(input, pos, pos);
}
function shiftUpChange() {
  if (language === 'en') {
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.enShift || el.dataset.shift) {
          el.innerText = el.dataset.enShift || el.dataset.shift;
        }
      }
    });
  }

  if (language === 'ru') {
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.ruShift || el.dataset.shift) {
          el.innerText = el.dataset.ruShift || el.dataset.shift;
        }
      }
    });
  }
}


function shiftDownChange() {
  if (language === 'en') {
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.enShift || el.dataset.shift) {
          el.innerText = el.dataset.en;
        }
      }
    });
  }

  if (language === 'ru') {
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.ruShift || el.dataset.shift) {
          el.innerText = el.dataset.ru;
        }
      }
    });
  }
}

function localStorageLanguage() {
  if (language === 'en') {
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.en) {
          el.innerText = el.dataset.en;
        }
      }
    });
    return;
  }

  if (language === 'ru') {
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.ru) {
          el.innerText = el.dataset.ru;
        }
      }
    });
    localStorage.setItem('language', language);
  }
}

function changeLanguage() {
  if (language === 'en') {
    language = 'ru';
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.ru) {
          el.innerText = el.dataset.ru;
        }
      }
    });
    localStorage.setItem('language', language);
    return;
  }

  if (language === 'ru') {
    language = 'en';
    buttons.forEach((el) => {
      if (!serviceKeys.includes(el.dataset.key)) {
        if (el.dataset.en) {
          el.innerText = el.dataset.en;
        }
      }
    });
    localStorage.setItem('language', language);
  }
}

function toUpperCase() {
  buttons.forEach((el) => {
    if (!serviceKeys.includes(el.dataset.key)) {
      el.style.textTransform = 'uppercase';
    }
  });
}

function toLowerCase() {
  buttons.forEach((el) => {
    if (!serviceKeys.includes(el.dataset.key)) {
      el.style.textTransform = 'lowercase';
    }
  });
}

function pressButton(inputType) {
  const dataKey = (this.dataset.key);
  if (inputType === 'virtualKeyboard') {
    if (!serviceKeys.includes(dataKey)) {
      if (this.dataset.en || this.dataset.ru) {
        displayInput.value += this.innerText;
      }
    }
  }


  if (dataKey === 'Backspace' && inputType === 'virtualKeyboard') {
    const selectedStart = displayInput.selectionStart;
    const selectedEnd = displayInput.selectionEnd;
    let textValue;
    if (selectedStart !== selectedEnd) {
      const beforeSelectedValue = displayInput.value.substring(0, selectedStart);
      const afterSelectedValue = displayInput.value.substring(selectedEnd);
      textValue = beforeSelectedValue + afterSelectedValue;
      displayInput.value = textValue;
    } else {
      textValue = displayInput.value.slice(0, -1);
      displayInput.value = textValue;
    }
  }


  if (dataKey === 'Enter' && inputType === 'virtualKeyboard') {
    displayInput.value += '\n';
  }

  if (dataKey === 'Space' && inputType === 'virtualKeyboard') {
    displayInput.value += ' ';
  }

  if (dataKey === 'ArrowLeft' && inputType === 'virtualKeyboard') {
    const selectedEnd = displayInput.selectionEnd;
    if (selectedEnd - 1 >= 0) {
      setCaretToPos(displayInput, selectedEnd - 1);
    }
  }

  if (dataKey === 'ArrowRight' && inputType === 'virtualKeyboard') {
    const selectedStart = displayInput.selectionStart;
    if (selectedStart) {
      setCaretToPos(displayInput, selectedStart + 1);
    }
  }

  if (dataKey === 'ArrowUp' && inputType === 'virtualKeyboard') {
    const caretPosition = displayInput.selectionStart;
    let newCaretPosition;
    const lines = displayInput.value.split('\n');
    const linesAmount = lines.length;
    let prevLineLength;
    let currentLineLength;
    let currentLength = lines[0].length;
    for (let i = 1; i < linesAmount; i += 1) {
      currentLength += lines[i].length + 1;
      currentLineLength = lines[i].length;
      prevLineLength = lines[i - 1].length;
      if (currentLength >= caretPosition) {
        if (currentLineLength > prevLineLength && caretPosition - prevLineLength > prevLineLength) {
          newCaretPosition = currentLength - currentLineLength;
        } else {
          newCaretPosition = caretPosition - prevLineLength;
        }
        if (caretPosition) {
          setCaretToPos(displayInput, newCaretPosition - 1);
        }
        return;
      }
    }
  }

  if (dataKey === 'ArrowDown' && inputType === 'virtualKeyboard') {
    const caretPosition = displayInput.selectionStart;
    let newCaretPosition;
    const lines = displayInput.value.split('\n');
    const linesAmount = lines.length;
    let nextLineLength;
    let currentLineLength;
    let currentLength = 0;
    for (let i = 0; i < linesAmount; i += 1) {
      currentLength += lines[i].length;
      currentLineLength = lines[i].length;
      nextLineLength = lines[i + 1].length;
      if (currentLength >= caretPosition) {
        if (currentLineLength > nextLineLength) {
          newCaretPosition = currentLength + nextLineLength;
        } else {
          newCaretPosition = caretPosition + nextLineLength;
        }
        if (caretPosition) {
          setCaretToPos(displayInput, newCaretPosition + 1);
        }
        return;
      }
    }
  }


  if (dataKey === 'ControlLeft' || dataKey === 'ControlRight') {
    ctrlState = 'on';
  }
  if (dataKey === 'ShiftRight' || dataKey === 'ShiftLeft') {
    shiftState = 'on';
    if (ctrlState !== 'on') {
      toUpperCase();
      shiftUpChange();
    }
  }
  if (dataKey === 'CapsLock' && capsState === 'on') {
    capsState = 'off';
    toLowerCase();
    return;
  }
  if (dataKey === 'CapsLock' && capsState === 'off') {
    capsState = 'on';
    toUpperCase();
  }
  this.style.transform = 'translateZ(5px)';
  this.style.background = '#444';
}

function depressButton() {
  displayInput.focus();
  const dataKey = (this.dataset.key);
  if (shiftState === 'on' && ctrlState === 'on') {
    shiftState = 'off';
    ctrlState = 'off';
    changeLanguage();
  }
  if (dataKey === 'ShiftRight' || dataKey === 'ShiftLeft') {
    shiftState = 'off';
    toLowerCase();
    shiftDownChange();
  }
  if (dataKey === 'CapsLock' && capsState === 'on') {
    return;
  }
  this.style.transform = 'translateZ(10px)';
  this.style.background = '#333';
}


//  press button event
buttons.forEach((el) => {
  el.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    pressButton.call(el, 'virtualKeyboard');
  });
});

//  depress button event
buttons.forEach((el) => {
  el.addEventListener('mouseup', (event) => {
    event.stopPropagation();
    depressButton.call(el);
  });
});

//  depress button event if mouse leave key with pressed button
buttons.forEach((el) => {
  el.addEventListener('mouseleave', (event) => {
    event.stopPropagation();
    depressButton.call(el);
  });
});

//  keyboard key press event
document.addEventListener('keydown', (event) => {
  const key = event.code;
  if (key === 'Tab') {
    event.preventDefault();
  }
  const keyboardKey = document.querySelector(`.keyboard div[data-key="${key}"`);
  if (keyboardKey) {
    pressButton.call(keyboardKey, 'realKeyboard');
  }
});

//  keyboard key depress event
document.addEventListener('keyup', (e) => {
  const key = e.code;
  const keyboardKey = document.querySelector(`div[data-key="${key}"`);
  if (keyboardKey) {
    depressButton.call(keyboardKey);
  }
});

function init() {
  if (localStorage.language) {
    language = localStorage.language;
    localStorageLanguage();
  }
}

// matrix background
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
let letters = '诶比西迪伊吉艾杰开哦屁提维';
letters = letters.split('');

// Setting up the columns
const fontSize = 10;
const columns = canvas.width / fontSize;

// Setting up the drops
const drops = [];
for (let i = 0; i < columns; i += 1) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i += 1) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i] += 1;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

// Loop of the animation
setInterval(draw, 50);
init();
