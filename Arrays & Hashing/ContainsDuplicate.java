import java.util.Arrays;
import java.util.HashSet;

public class ContainsDuplicate {
    public static boolean containsDuplicate(int[] nums) {
        /*
         * Approach: We can use a HashSet to store the elements of the array. If we
         * find an element that is already present in the HashSet, we return true. If
         * we reach the end of the array without finding any duplicate elements, we
         * return false.
         * Time complexity: O(n) where n is the number of elements in the array
         * Space complexity: O(n) where n is the number of elements in the array
         */
        // HashSet<Integer> set = new HashSet<>();
        // for (int num : nums) {
        // if (set.contains(num)) {
        // return true;
        // }
        // set.add(num);
        // }
        // return false;

        /*
         * Approach: We can sort the array and then check if there are any adjacent
         * elements that are equal. If we find any such elements, we return true. If we
         * reach the end of the array without finding any duplicate elements, we return
         * false.
         * Time complexity: O(nlogn) where n is the number of elements in the array
         * Space complexity: O(1)
         */
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 1 })); // Output: true
        System.out.println(containsDuplicate(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 })); // Output: false
    }
}