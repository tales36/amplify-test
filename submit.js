// ボタンの要素を取得
    var button = document.getElementById("button");     
// ボタンをクリックした時の処理
if (paper != null) {
    button.addEventListener("click", function(e) {
    e.preventDefault();
          })
};
// 入力フォームの値を取得
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
    sendmail("お問い合わせがありました",form);
    });
