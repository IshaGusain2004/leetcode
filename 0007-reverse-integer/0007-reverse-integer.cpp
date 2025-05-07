class Solution {
public:
    int reverse(int x) {
        
        int num = x;
        long int rev = 0;

        while (num != 0) {
            int digit = num % 10;
            rev = 10 * rev + digit;

            if (rev > INT_MAX)
                return 0;
            if (rev < INT_MIN)
                return 0;

            num /= 10;
        }

        return static_cast<int>(rev);
    

        
    }
};