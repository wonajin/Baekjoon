function solution(nums) {
    const type = new Set(nums).size; 
    const x = nums.length / 2;     
    return Math.min(type, x);  
}
