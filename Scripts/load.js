

const STATUS_ENUM = {
    Unknown: 0,
    Correct: 1,
    Error: 2
};

function AsStatus(status)
{
    switch (status)
    {
        case STATUS_ENUM.Unknown:
            return "Unknown";
        case STATUS_ENUM.Correct:
            return "Correct";
        case STATUS_ENUM.Error:
            return "Error";
        default:
            return "Decoder fail! Report to Aleq777";
    }
}

function Load()
{
    const table = Find("output");

    for (let i = 0; i < 8; i++)
    {
        let tr = Create("tr");

        let system = Create("td");
        system.innerText = `System ${i + 1}`;

        let name = Create("td");
        let nameInput = Create("input");
        nameInput.type = "text";
        nameInput.placeholder = "Custom name...";
        name.appendChild(nameInput);

        let value = Create("td");
        value.id = `status${i}`;
        value.innerText = AsStatus(STATUS_ENUM.Unknown);


        tr.appendChild(system);
        tr.appendChild(name);
        tr.appendChild(value);

        table.appendChild(tr);
    }

    Check();
}