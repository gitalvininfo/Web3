pragma solidity ^0.4.2;

contract MyContract {
    uint data = 123;
    string public functionCalled;

    function getData() external view returns(uint) {
        return data;
    }
    function setData(uint _data) external {
        data = _data;
    }

    function setDataPrivate(uint _data) private {
        data = _data + 10;
    }

    function sendEther() external payable {
        functionCalled = 'sendEther';
    }

    // function() external payable {
    //     functionCalled = 'fallback';
    // }
}