pragma solidity >=0.4.21 <0.7.0;

contract Market {
    address[16] public buyers;

    // Buying a item
    function buy(uint256 itemId) public returns (uint256) {
        require(itemId >= 0 && itemId <= 15);

        buyers[itemId] = msg.sender;

        return itemId;
    }

    // Retrieving the buyers
    function getBuyers() public view returns (address[16] memory) {
        return buyers;
    }
}
