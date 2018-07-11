customerData = [{
        name: "x",
        phone: 5555,
        email: "asdf"
    },

    {
        name: "x",
        phone: 5555,
        email: "asdf"
    }
]


var table = document.createElement('table');
for (var i = 0; i < customerData.length; i++) {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    var text1 = document.createTextNode(customerData[i].name);
    var text2 = document.createTextNode(customerData[i].phone);
    var text3 = document.createTextNode(customerData[i].email);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td2.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // tbody.appendChild(tr);
    table.appendChild(tr);
}
document.body.appendChild(table);