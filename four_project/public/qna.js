function openForm() {
    document.getElementById("myForm").style.display = "block";
    }
    function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }
    
    var tbody = document.querySelector('#question-list tbody');
    tbody.innerHTML = '';
    
    var i=0
    
    function showtable(e){
        i++;
        if(i%2==1)
        document.getElementById("recomment").style.display='block';
        else
        document.getElementById("recomment").style.display='none';
        //
        document.getElementById("question_id").value=e.path[1].getAttribute("id");
       
        
        
        //
        // var a = document.querySelector('#question-list tbody');
        //console.log(e.path[1]);
        console.log(e.path[1]);
        
        // console.log(e.path.td[0]);
    
    }
    function get(id){
        getComment(id);
    }
    function cancel(){
      i++;
      document.getElementById("recomment").style.display="none";
    };
    window.onload = function(){
      getQuestion();
    }
    
    
    function getQuestion() {
        fetch('/qna/q', {method: 'GET'})
        .then((response) => {
            if(response.status == '200'){
              console.log(response);
                return response.json();
            }
        })
        .then((resultJson) => {
            console.log(resultJson);
            const questions = resultJson;
            var tbody = document.querySelector('#question-list tbody');
            tbody.innerHTML = '';
            
            for(const question of questions){
              var row = document.createElement('tr');
              row.style.fontFamily = "'Nanum Gothic', sans-serif";
              row.id = question.id;
    
              var td = document.createElement('td');
              td.textContent = question.id;
              td.style.fontFamily = "'Nanum Gothic', sans-serif";
              td.addEventListener('click',(e)=>{
                showtable(e);
              })
              row.appendChild(td);
    
              td = document.createElement('td');
              td.textContent = question.nick;
              td.style.fontFamily = "'Nanum Gothic', sans-serif";
              td.style.wordBreak="keep-all";
              td.addEventListener('click',(e)=>{
                showtable(e);
              })
              row.appendChild(td);
    
              td = document.createElement('td');
              td.textContent = question.context;
              td.style.wordBreak="keep-all";
              td.addEventListener('click',(e)=>{
                showtable(e);
              })
              row.appendChild(td);
    
              var edit = document.createElement('button');
              edit.textContent='수정';
              edit.style.backgroundColor = "#ff99cc";
              edit.style.width = "74px";
              edit.style.height = "35px";
              edit.style.color="#FFFFFF";
              edit.style.borderRadius = "20px";
              edit.style.textAlign = "center";
              edit.style.cursor = "url('6.cur'), pointer";
              edit.style.textDecoration = "none";
              edit.style.border = "none";
              edit.style.fontFamily = "'Noto Serif KR', sans-serif";
              edit.addEventListener('click',()=>{
                var passwordContext = prompt('비밀번호를 입력하세요')
                if(passwordContext==question.password)
                var newContext = prompt('바꿀 내용을 입력하세요');
                else{
                  return alert('비밀번호가 틀렸습니다')
                }
                if(!newContext){
                  return alert('내용 입력은 필수입니다');
                }
                fetch('/qna/q/'+question.id,
              {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify({context: newContext})
              }
            ).then((response)=>{
              if(response.status=='200'){
                return response.json();
              }
            }).then((resJson)=>{
              console.log(resJson);
              getQuestion();
            }).catch((error)=>{
              console.error('fetch호출에러');
            })
              })
    
              td = document.createElement('td');
              td.appendChild(edit);
              row.appendChild(td);
    
              var remove = document.createElement('button');
              remove.textContent='삭제';
              remove.style.backgroundColor = "#d9b3ff";
              remove.style.width = "74px";
              remove.style.height = "35px";
              remove.style.color="#FFFFFF";
              remove.style.borderRadius = "20px";
              remove.style.textAlign = "center";
              remove.style.cursor = "url('6.cur'), pointer";
              remove.style.textDecoration = "none";
              remove.style.border = "none";
              remove.style.fontFamily = "'Noto Serif KR', sans-serif";
              remove.addEventListener('click',()=>{
                var passwordContext = prompt('비밀번호를 입력하세요')
                if(passwordContext==question.password)
                fetch('/qna/q/'+question.id, {method:"DELETE"}
              ).then((response)=>{
                if(response.status == '200'){
                  return response.json();
                }
              }).then((resJson)=>{
                console.log(resJson);
                getQuestion();
              }).catch((error)=>{
                console.error('fetch호출에러');
              });
              else{
                return alert('비밀번호가 틀렸습니다')
              }
            });
              td = document.createElement('td');
              td.appendChild(remove);
              row.appendChild(td);
    
    
              tbody.appendChild(row);
              get(question.id);
              // getComment(question.id);
            }
        })
        .catch((error) => {
            console.error('fetch 호출에서 에러 발생 : ');
        });
    }
    
    document.getElementById('user-form').addEventListener('submit', (e) => {
        e.preventDefault();
        var nick = e.target.nick.value;
        var context = e.target.context.value;
        var password = e.target.password.value;
        if(!context){
            return alert('내용을 입력하세요');
        }
        fetch('/qna/q',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ nick:nick , context:context , password: password})
        }).then((response) => {
            if(response.status == '201'){
                return response.json();
            }
        }).then((result) => {
            console.log(result);
            getQuestion();
        }).catch((error) => {
            console.error('fetch 호출에서 에러발생: ');
        });
    
        e.target.context.value = '';
        e.target.password.value = '';
        closeForm();
    });
    
    
    function getComment(id){
      fetch('/qna/a/'+id, {method:'GET'})
      .then((response)=>{
        if(response.status=='200'){
          return response.json();
        }
      }).then((resJson)=>{
        const comments = resJson;
        console.log(comments);
        for(const comment of comments){
          var row2 = document.createElement('tr');
          
    
          var td = document.createElement('td');
          td.textContent = "┗>";
          td.style.borderLeft="0px solid #cc0099";
          row2.appendChild(td);
    
    
          var td = document.createElement('td');
          td.textContent = comment.nick;
          td.style.fontFamily = "'Nanum Gothic', sans-serif";
          td.style.backgroundColor="#fbe9ed75";
          td.style.borderLeft="3px solid #cc0099";
          row2.appendChild(td);
    
          var td = document.createElement('td');
          td.textContent = comment.context;
          td.style.fontFamily = "'Nanum Gothic', sans-serif";
          td.style.backgroundColor="#fbe9ed85";
          row2.appendChild(td);
    
          var edit = document.createElement('button');
          var td = document.createElement('td');
          td.appendChild(edit);
          edit.textContent = '수정';
          edit.style.backgroundColor = "#ff99cc";
          edit.style.width = "74px";
          edit.style.height = "35px";
          edit.style.color="#FFFFFF";
          edit.style.borderRadius = "20px";
          edit.style.textAlign = "center";
          edit.style.cursor = "url('6.cur'), pointer";
          edit.style.textDecoration = "none";
          edit.style.border = "none";
          edit.style.fontFamily = "'Noto Serif KR', sans-serif";
          edit.addEventListener('click',()=>{
            var passwordContext = prompt('비밀번호를 입력하세요')
            if(passwordContext==comment.password)
            var newComment = prompt('바꿀 내용을 입력하세요');
            else{
              return alert('비밀번호 틀렸다')
            }
            if(!newComment){
              return alert('내용을 반드시 입력해야합니다.');
            }
            fetch('qna/a/'+ comment.id,{
              headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
              },
              method:"PATCH",
              body: JSON.stringify({context:newComment})
            }
          ).then((response)=>{
            if(response.status== '200'){
              return response.json();
            }
          }).then((resJson)=>{
            console.log(resJson);
            getQuestion();
          }).catch((error)=>{
            console.error('fetch호출에러'+error.message);
          });
        });
        var remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.style.backgroundColor = "#d9b3ff";
        remove.style.width = "74px";
        remove.style.height = "35px";
        remove.style.color="#FFFFFF";
        remove.style.borderRadius = "20px";
        remove.style.textAlign = "center";
        remove.style.cursor = "url('6.cur'), pointer";
        remove.style.textDecoration = "none";
        remove.style.border = "none";
        remove.style.fontFamily = "'Noto Serif KR', sans-serif";
        remove.addEventListener('click',()=>{
          var passwordContext = prompt('비밀번호를 입력하세요')
          if(passwordContext==comment.password)
          fetch('/qna/a/'+comment.id,{method:"DELETE"}
        ).then((response)=>{
          if(response.status=='200'){
            return response.json();
          }
        }).then((resJson)=>{
          console.log(resJson);
          getQuestion();
        }).catch((error)=>{
          console.error('fetch호출에러'+ error.message);
        });
        else{
          return alert('비밀번호가 틀렸습니다')
        }
      });
          var td = document.createElement('td');
          td.style.backgroundColor="#fbe9ed85";
          td.appendChild(edit);
          row2.appendChild(td);
    
          var td = document.createElement('td');
          td.style.backgroundColor="#fbe9ed85";
          td.appendChild(remove);
          row2.appendChild(td);
    
          document.getElementById(id).after(row2);
    
        }
      }).catch((error)=>{
        console.error('fetch호출에러 :  '+error.message);
      });
    }
    
    
    
    document.getElementById('comment-form').addEventListener('submit',(e)=>{
      e.preventDefault();
      var id = e.target.question_id.value;
      var nick = e.target.com_nick.value;
      var context = e.target.com_context.value;
      var password = e.target.com_password.value;
      if(!context){
        return alert('내용을 반드시 입력해야합니다.');
      }
      fetch('/qna/a',
    {
      headers :{
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({id: id , nick: nick, context: context, password:password})
    }).then((response)=>{
      if(response.status == '201'){
        return response.json();
      }
    }).then((result)=>{
      console.log(result);
      getQuestion();
    }).catch((error)=>{
      console.error('fetch호출에러');
    });
    e.target.com_context.value='';
    e.target.com_password.value='';
    cancel();
    })
    
