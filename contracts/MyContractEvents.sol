pragma solidity ^0.4.2;

contract MyContractEvents {
    event MyEvent(
        uint indexed id,
        uint indexed date,
        string value
    );

    uint nextId;

    function emitEvent(string value) external {
        emit MyEvent(nextId, now, value);
        nextId++;
    }
}