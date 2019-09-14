
var btngrab = document.getElementById("btngr");
        function doc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    var data = JSON.parse(this.responseText);
                    document.getElementById("image").src = data.results[0].picture.large;
                    document.getElementById("name").innerHTML = data.results[0].name.first;
                    document.getElementById("lname").innerHTML = data.results[0].name.last;
                    document.getElementById("phoneno").innerHTML = data.results[0].phone;
                    document.getElementById("email").innerHTML = data.results[0].email;
                    document.getElementById("location").innerHTML = data.results[0].location.street;
                }
            };
            xhttp.open("GET", "https://randomuser.me/api/", true);
            xhttp.send();
        }
btngrab.addEventListener("click",doc);

