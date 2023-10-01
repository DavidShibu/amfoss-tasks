Man and --help command is the main tool that I used to complete the 15 levels of bandit.<br>
##Bandit0:<br>
I read the helpful reading material given in the website and used the command<br>
ssh username@host -p 2220<br>
-p attribute is used to declare the port to which we are connecting.<br>
##Bandit1:
This level was very easy as I knew some of the popular linux commands. For connecting to the <br>
next bandit server I used the combination ctrl+d to exit form the current server<br>
and pressed the up arrow key to get the history of command used and changed 0 to 1<br>
##Bandit2:
To open dashed or dotted files you need to use "<" symbol after cat. This level was<br>
bit tricky for me as I couldnt get this from man page. So I had to google it to find it out.
##Bandit3:
The password is copied using the combination shift+c and pasted using shift+v <br>
The procedure done in bandit1 is repeated. ls command is used to check for the directories<br>
and cat command is used to open the file. Backslash is used to indicate spaces <br>
between the filename.
##Bandit4
ls -a is used to list the hidden files. I could find this out by reading the man<br>
page of ls. Cat funcion along with "<" is used to open the file.<br>
##Bandit5
The file command is used to complete this level. The article in google about the <br>
find command and man of find helped to find the syntax and execute it.<br>
The ASCII file is identified and opened.<br>
##Bandit6
Same as did for the previous level but with more syntax and parameters to identify it.
##Bandit7
The find command is used with parameters user,group,size is used to find the file. After executing the command only one file permission is allowed.
##Bandit8
The string command along with grep command is used to filter out the text.
##Bandit9
The file is sorted and uniq command is used. The number of times a file is repeated is shown and we manually search for a file which is repeated only once.
##Bandit 10
Same as level 8 string and grep command is used to find out the password.
