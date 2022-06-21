// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract ToDoList{
    //state variables are written to blockchain cost more gas to use
    uint public taskCount = 0;
    
    struct Task {
        uint id;
        string content;
        bool completed;
    }
    mapping(uint=>Task) public tasks;

    constructor() public {
        createTask("check out the university");
    }

    function createTask(string memory _content) public{
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }




}