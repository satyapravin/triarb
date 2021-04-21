//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IExchangeWrapper {
    function getRate(address fromToken, address toToken, uint256 amount) external view returns (uint256);
    function swapTokens(address fromToken, address toToken, uint256 amount, address to) external payable;
}