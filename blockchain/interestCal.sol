//SPDX-License-Identifier: MIT

pragma solidity ^0.8.31;

contract SimpleInterestCalculation{
    
    uint256 public R; // interest rate (100=1%)

    function updateR(uint256 interest_rate) public{
        R = interest_rate;
    }

    function calculateInterest(uint256 P, uint256 T) public view returns (uint256){
        uint256 result = (P*R*T)/10000;
        return result;
    }
}
