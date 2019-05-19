import java.util.*;
import java.lang.Math;
public class passwordvalidator
{
    public static void main (String[] args){
        double no;
        int z,i,p,q;

        Scanner s=new Scanner(System.in );
        no=s.nextdouble();
        int a = String.valueOf(no).split("\\.")[1].length;

        q=(int)Math.pow(10,a);
        p=(int)no*q;

        {
            for(i=1;i<=p;i++)
            {
                for(z=1;z<=p;z++)
                {
                    p=p/i;
                    q=q/i
                }
            }
        }
        System.out.println(+no+"can be written in simplified form ass p/q where\n");
        System.out.println(no+"="+p+"/"+q);
    }

}
