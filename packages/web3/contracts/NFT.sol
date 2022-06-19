// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private tokenId;

    constructor() ERC721("Crowdfund", "CDF") {}

    function mint(address recipientAddress, string memory tokenURI_) public returns (uint256 newItemId) {
        tokenId.increment();
        newItemId = tokenId.current();
        _safeMint(recipientAddress, newItemId);
        _setTokenURI(newItemId, tokenURI_);
    }

}