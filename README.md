# DSA-Big-O

1. What is the Big O for this?
  1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
  Answer: O(1)


  2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
  Answer: O(n)

2. Even or odd
What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

Answer: O(1)
Explanation: The run time is constant, you call the function with a number and the data is returned in the same amount of time no matter how big the number is.


3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

Answer: O(n^k)
Explanation: It requires 2 levels of looping. So, every item in arr2 will be called once for every item in arr1 before the function is complete.


4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

Answer: O(n)
Explanation: Since every item in the array is being referenced, the running time would be directly proportional to to the size of the array.


5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

Answer: O(n)
Explanation: The running time would be directly proportional to to the size of the array.


6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

Answer: O(n^k)
Explanation: The nested loops. Every item in the arr will be called once for every item within itself. 


7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

Answer: The function takes in an array of numbers calculates their new values before pushing them to a new array. The complexity is O(n)
Explanation: The function uses a for loop with idx increasing by an increment of 1. That means that every item in the variable num will be called and the running time will increase or decrease in proportion to the variable's length.


8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

Answer: O(n)
Explanation: Not every item in the given array may be called, but the function starts in the middle of the arr and moves increment by increment until it finds the the item it wants. That means this function's complexity is still linear.


9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

Answer: O(1)
Explanation: The function is randomly accessing an array a single time. So, no matter how long the array, the run time will remain the same.


10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

Answer: O(n)
Explanation: in the event that variable 'n' is a mappable data structure, every item in 'n' will be called. So, the run time will be proportionate to the length of the data. 


11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?



12. Iterative version 
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

(See refractor.js for solutions)
  1. This solution's complexity is O(n)
      Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.

  2. This solution's complexity is O(n)
      This is another function that has a run time proportionate to the size of the data. 

  3. This solution's complexity is O(n)
      Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.

  4. This solution's complexity is O(n)
    Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.

  5. This solution's complexity is O(n)
    Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.

  6. This solution's complexity is O(n)
    Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.

  7. This solution's complexity is O(n)
    Though it's not mapping over an array, the run time is proportionate to to the size of the data. In this case, how large the number is.



13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

Answer: O()
Explanation: 



14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

Answer: O()
Explanation: 


