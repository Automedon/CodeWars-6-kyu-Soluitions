/*
###Task:

You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, where n is parameter.

Note:Returning the pattern is not the same as Printing the pattern.
####Parameters:

pattern(        n        );
                ^                     
                |                     
         Term upto which   
       Basic Pattern(this)     
            should be         
             created            
####Rules/Note:

If n < 1 then it should return "" i.e. empty string.
The length of each line is same, and is equal to the length of longest line in the pattern i.e (2n-1).
Range of Parameters (for the sake of CW Compiler) :
n ∈ (-∞,100]
###Examples:

pattern(5):

  1       1
   2     2 
    3   3  
     4 4   
      5    
     4 4   
    3   3  
   2     2 
  1       1
pattern(10):

  1                 1
   2               2 
    3             3  
     4           4   
      5         5    
       6       6     
        7     7      
         8   8       
          9 9        
           0         
          9 9        
         8   8       
        7     7      
       6       6     
      5         5    
     4           4   
    3             3  
   2               2 
  1                 1
pattern(15):

  1                           1
   2                         2 
    3                       3  
     4                     4   
      5                   5    
       6                 6     
        7               7      
         8             8       
          9           9        
           0         0         
            1       1          
             2     2           
              3   3            
               4 4             
                5              
               4 4             
              3   3            
             2     2           
            1       1          
           0         0         
          9           9        
         8             8       
        7               7      
       6                 6     
      5                   5    
     4                     4   
    3                       3  
   2                         2 
  1                           1
*/
function pattern(n){
 var output="";
   let arr = [];
   for (let i=1,j=(n-1)*2-1;i<=n;i++,j-=2){
     if (i===n) output+=' '.repeat(i-1)+i%10+' '.repeat(i-1)+'\n'
     else output+=' '.repeat(i-1)+i%10+' '.repeat(j)+i%10+' '.repeat(i-1)+'\n'
   }
 return output+output.split`\n`.slice(0,-2).reverse().join`\n`;
}
