
     

    fetch(`http://localhost:3500/new-message`)
    .then((messageData)=> messageData.json())
    .then((data)=> dsiplaydata(data))


    function dsiplaydata(datas) {
        console.log(datas);
        let data = document.getElementById("data");
        data.innerHTML = "";
        for (let i = 0; i < datas.length; i++) {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${datas[i].user}</td> <td>${datas[i].text}</td>  <td>${datas[i].added}</td>`;
          data.appendChild(row)
        }
      }
    