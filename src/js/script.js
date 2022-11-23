let exists = false;
let cnt = 1;
let idcnt = 1;

function createTable()
{
    if (!exists)
    {
        const table = document.createElement("table")
        table.setAttribute("id", "table_element")

        document.getElementById('container').appendChild(table);
        exists = true;

        document.getElementById('add').disabled = false;
        document.getElementById('delete').disabled = false;
        document.getElementById('number').disabled = false;
    }
    else
    {
        alert('Таблица уже создана')
    }
}

function addRow()
{
    const table = document.getElementById('table_element');
    const row = table.insertRow();

    row.setAttribute("id", "num-" + idcnt++);

    const tdNumber = row.insertCell();
    tdNumber.textContent = cnt++;

    const tdValue = row.insertCell();
    tdValue.textContent = 'value';
}

function deleteRow()
{
    const input = document.getElementById('number').value;
    const table = document.getElementById('table_element');
    let i = parseInt(input);
    if ((i < cnt) && (i > 0))
    {
        table.deleteRow(i - 1);
        cnt--;
    }
    else
    {
        alert('Такой строки нет!')
    }
}