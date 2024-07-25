$('.b7').click(function () {
    $('.ajax').load('https://reqres.in/api/users', function (responseData, statusTxt, xhr) {
        if (statusTxt == 'success') {
            let data = JSON.parse(responseData);
            let users = data.data;
            let table = '<table><tr><th>id</th><th>email</th><th>first_name</th><th>last_name</th><th>avatar</th></tr>';
            users.forEach(user => {
                table += `<tr>
                    <td class='detail' data-id='${user.id}'>${user.id}</td>
                    <td class='detail' data-id='${user.id}'>${user.email}</td>
                    <td class='detail' data-id='${user.id}'>${user.first_name}</td>
                    <td class='detail' data-id='${user.id}'>${user.last_name}</td>
                    <td class='detail' data-id='${user.id}'><img src='${user.avatar}'></td>
                </tr>`;
            });
            table += '</table>';
            $('.ajax2').append(table);
            $('.ajax').empty();

            $('.detail').click(function () {
                let userId = $(this).data('id')
                console.log(`Fetching details for user ID: ${userId}`);
                $.get(`https://reqres.in/api/users/${userId}`, function(responseData){
                let user = responseData.data;
                let uDetails = `
                <div>
                    <img src='${user.avatar}'>
                    <p>ID: ${user.id}</p>
                    <p>Email: ${user.email}</p>
                    <p>First Name: ${user.first_name}</p>
                    <p>Last Name: ${user.last_name}</p>
                    </div>
                `;
                $('.details').html(uDetails);
            }).fail(function(xhr, status, error) {
                console.error(`Error fetching user details: ${status} ${error}`);
            });
        });
        } else if (statusTxt == 'error') {
            alert("Error " + xhr.status + ":" + xhr.responseText);
        }
    });
});


$('.b72').click(function () {
    $.get('https://reqres.in/api/users', function (response) {
        let users = response.data;
        let table = '<table><tr><th>id</th><th>email</th><th>first_name</th><th>last_name</th></tr>'
        users.forEach(user => {
            table += `<tr>
            <td>${user.id}</td>
            <td>${user.email}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            </tr>`
        })
        table += '</table>'
        $('.ajax2').html(table)
    })
        .fail(function (xhr) {
            alert("Error " + xhr.status + ": " + xhr.statusText);
        });
})

$(".b73").click(function () {
    $.post("https://reqres.in/api/users",
        {
            "id": "100",
            "email": "email@domain.com",
            "first_name": 'sample',
            'last_name': 'name'
        },
        function (data, status) {
            // alert("Status: " + status + "\nData posted successfully");
            console.log('posted successfully')

            $.ajax({
                url: 'https://reqres.in/api/users?page=2',
                success: function (response) {
                    let users = response.data
                    let table = '<table><tr><th>id</th><th>email</th><th>first_name</th><th>last_name</th><th>avatar</th></tr>'
                    users.forEach(user => {
                        table += `<tr>
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td><img src='${user.avatar}'></td>
                </tr>`
                    });
                    table += '</table>'
                    $('.ajax2').html(table)
                },
                error: function (xhr) {
                    alert("Error " + xhr.status + ":" + xhr.statusText)
                }
            })
        });
});
