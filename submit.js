// �{�^���̗v�f���擾
    var button = document.getElementById("button");     
// �{�^�����N���b�N�������̏���
    button.addEventListener("click", function(e) {
    e.preventDefault();
// ���̓t�H�[���̒l���擾
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var sex = document.getElementById("sex").value;
    var blood = document.getElementById("blood").value;
    var textform = document.getElementById("textform").value;
    var form = name + mail + sex + blood + textform;
    function sendmail(subject, body) {
      return fetch('https://iy93xy8xg3.execute-api.us-east-1.amazonaws.com/production/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, body })
      })
    }
    sendmail("���₢���킹������܂���",form);
    });