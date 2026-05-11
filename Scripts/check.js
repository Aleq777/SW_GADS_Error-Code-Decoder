

function Validate(code)
{
    const isValid = code >= 0 && code <= 255 && code % 1 == 0;

    Find("codeError").hidden = isValid;

    return isValid;
}

function ToBinary(num)
{
    return Math.pow(2, num);
}

function Decode(code, index)
{
    let isError = (code & ToBinary(index)) == ToBinary(index);

    const status = Find(`status${index}`);

    status.innerText = AsStatus( isError ? STATUS_ENUM.Error : STATUS_ENUM.Correct );
    status.style.color = isError ? "red" : "green";
}

function Check()
{
    const code = Find("code").value;

    if (!Validate(code))
        return;

    for (let i = 0; i < 8; i++)
    {
        Decode(code, i);
    }
}