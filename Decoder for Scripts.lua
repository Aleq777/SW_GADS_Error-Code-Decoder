
---@see Essential functions


---@section PowerTwo

--- `2 ^ num`
---@param num integer
---@return integer
---@nodiscard
function PowerTwo(num)
    ---@type integer
    local result = 1

    ---@type integer
    for i = 1, num do
        result = result * 2
    end

    return result
end

---@endsection




---@section ToBinary

--- Converts a value to the 2-power
---@param num integer
---@return integer
---@nodiscard
function ToBinary(num)
    return PowerTwo(num - 1)
end

---@endsection


---@see You can use any of these


---@section IsSystemError

--- Checks, if the system has thrown an error based on the `errorCode`
---@param errorCode integer
---@param systemIndex integer
---@return boolean
---@nodiscard
function IsSystemError(errorCode, systemIndex)
    return errorCode & ToBinary(i) == ToBinary(i)
end

---@endsection



---@section Decode

--- Returns all System's indexes, which are working incorrectly
---@param errorCode integer
---@return integer[] # Faulty Systems' indexes
---@nodiscard
function Decode(errorCode)
    ---@type integer[]
    local result = { }

    for i = 1, 8 do
        if IsSystemError(errorCode, i) then
            table.insert(result, i)
        end
    end

    return result
end

---@endsection
